// src/screen/BookFormScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { supabase } from '../services/supabase';

export default function BookFormScreen({ route, navigation }) {
  // Verifica se veio algum livro para edição (parâmetros da navegação)
  const livroParaEditar = route.params?.book;

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  // Se for edição, preenche os campos ao abrir a tela
  useEffect(() => {
    if (livroParaEditar) {
      setTitle(livroParaEditar.title);
      setAuthor(livroParaEditar.author);
    }
  }, [livroParaEditar]);

  const handleSave = async () => {
    if (!title || !author) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    setLoading(true);
    let error;

    if (livroParaEditar) {
      // --- UPDATE (ATUALIZAR) ---
      const response = await supabase
        .from('books')
        .update({ title, author })
        .eq('id', livroParaEditar.id); // Onde ID for igual ao do livro
      error = response.error;
    } else {
      // --- CREATE (CRIAR) ---
      const response = await supabase
        .from('books')
        .insert([{ title, author }]);
      error = response.error;
    }

    setLoading(false);

    if (error) {
      Alert.alert('Erro', error.message);
    } else {
      // Volta para a Home e atualiza a lista
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título do Livro</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Ex: Dom Casmurro"
      />

      <Text style={styles.label}>Autor</Text>
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
        placeholder="Ex: Machado de Assis"
      />

      <Button 
        title={loading ? "Salvando..." : "Salvar Livro"} 
        onPress={handleSave} 
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, marginBottom: 5, fontWeight: 'bold' },
  input: {
    borderWidth: 1, borderColor: '#ddd', padding: 10, 
    borderRadius: 5, marginBottom: 20, fontSize: 16
  }
});