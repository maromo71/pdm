import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { supabase } from './src/services/supabase'; 
import { registerForLocalNotificationsAsync, triggerLocalNotification } from './src/helper/notificationsHelper';

export default function App() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);

  // 1. INICIALIZAÇÃO E ESCUTA (REALTIME)
  useEffect(() => {
    // A) Pede permissão para mostrar notificações
    registerForLocalNotificationsAsync().then(granted => {
      setPermissionGranted(granted);
    });

    // B) Liga o "Radar" do Supabase (Realtime)
    const subscription = supabase
      .channel('public:notifications') // Canal público
      .on(
        'postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'notifications' }, 
        (payload) => {
          // C) MÁGICA: Quando chegar um dado novo, dispara notificação
          console.log("Nova mensagem recebida!", payload.new);
          triggerLocalNotification(payload.new.title, payload.new.body);
        }
      )
      .subscribe();

    // Limpeza ao fechar o app
    return () => supabase.removeChannel(subscription);
  }, []);

  // 2. FUNÇÃO DO ADMIN (Enviar)
  const sendNotification = async () => {
    if (!title.trim() || !message.trim()) return Alert.alert("Preencha tudo");

    setLoading(true);

    // Em vez de chamar API da Expo, apenas SALVAMOS no banco.
    // O Realtime fará o resto.
    const { error } = await supabase
      .from('notifications')
      .insert([{ title: title, body: message }]);

    setLoading(false);

    if (error) {
      Alert.alert("Erro", error.message);
    } else {
      Alert.alert("Sucesso", "Mensagem enviada para todos conectados!");
      setTitle('');
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>📡 EngComp Alert (Realtime)</Text>

        <View style={styles.statusContainer}>
          <Text style={styles.label}>Status da Conexão:</Text>
          <Text style={{ color: permissionGranted ? 'green' : 'orange', fontWeight: 'bold' }}>
            {permissionGranted ? "🟢 Escutando Avisos..." : "🟠 Sem Permissão"}
          </Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.subHeader}>Área do Coordenador</Text>
        <TextInput
          style={styles.input}
          placeholder="Título (ex: Nota Liberada)"
          value={title} onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Mensagem (ex: Confira no SIGA)"
          value={message} onChangeText={setMessage}
          multiline
        />

        {loading ? (
          <ActivityIndicator size="large" color="#007AFF" />
        ) : (
          <Button title="DISPARAR ALERTA" onPress={sendNotification} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 50 },
  scroll: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  statusContainer: { backgroundColor: '#fff', padding: 15, borderRadius: 10, alignItems: 'center' },
  label: { fontSize: 14, color: '#666' },
  divider: { height: 1, backgroundColor: '#ccc', marginVertical: 20 },
  subHeader: { fontSize: 20, fontWeight: 'bold', color: '#007AFF', marginBottom: 10 },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, fontSize: 16 },
  textArea: { height: 80, textAlignVertical: 'top' },
});