// src/screen/HomeScreen.js
import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Ícones prontos do Expo
import { supabase } from '../services/supabase';

export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- READ (LER) ---
  const fetchBooks = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .order('id', { ascending: false }); // Mais recentes primeiro

    if (error) Alert.alert("Erro", error.message);
    else setBooks(data);
    
    setLoading(false);
  };

  // Recarrega a lista toda vez que voltamos para esta tela
  useFocusEffect(
    useCallback(() => {
      fetchBooks();
    }, [])
  );

  // --- DELETE (EXCLUIR) ---
  const handleDelete = (id) => {
    Alert.alert("Excluir", "Tem certeza que deseja apagar este livro?", [
      { text: "Cancelar", style: "cancel" },
      { 
        text: "Apagar", 
        style: "destructive",
        onPress: async () => {
          const { error } = await supabase.from('books').delete().eq('id', id);
          if (error) Alert.alert("Erro", error.message);
          else fetchBooks(); // Atualiza a lista após excluir
        }
      }
    ]);
  };

  const renderBookItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
      
      <View style={styles.actions}>
        {/* Botão Editar: Navega para o form passando o livro atual */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('BookForm', { book: item })} 
          style={styles.actionButton}
        >
          <Ionicons name="pencil" size={24} color="#4A90E2" />
        </TouchableOpacity>

        {/* Botão Excluir */}
        <TouchableOpacity 
          onPress={() => handleDelete(item.id)} 
          style={styles.actionButton}
        >
          <Ionicons name="trash" size={24} color="#D0021B" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" style={{marginTop: 20}} />
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderBookItem}
          contentContainerStyle={{ paddingBottom: 80 }} // Espaço para o botão flutuante
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum livro cadastrado.</Text>}
        />
      )}

      {/* Botão Flutuante (FAB) para Adicionar */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => navigation.navigate('BookForm')}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  card: { 
    flexDirection: 'row', backgroundColor: '#fff', padding: 15, 
    borderRadius: 8, marginBottom: 10, alignItems: 'center', elevation: 2 
  },
  textContainer: { flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  author: { fontSize: 14, color: '#666' },
  actions: { flexDirection: 'row', gap: 15 },
  emptyText: { textAlign: 'center', marginTop: 50, color: '#999' },
  fab: {
    position: 'absolute', bottom: 20, right: 20,
    backgroundColor: '#007AFF', width: 56, height: 56,
    borderRadius: 28, justifyContent: 'center', alignItems: 'center', elevation: 5
  }
});