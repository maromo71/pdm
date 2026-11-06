// src/screen/HomeScreen.js
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Image,
    TextInput
} from 'react-native';
import { buscarFilmes } from '../api'; // Importando nossa API simulada

export default function HomeScreen({ navigation }) {
    const [filmes, setFilmes] = useState([]);
    const [busca, setBusca] = useState('');
    const [loading, setLoading] = useState(true);

    // useEffect substitui o "OnCreate" para carregar dados iniciais
    useEffect(() => {
        async function carregarDados() {
            const dados = await buscarFilmes(); // Consumo da API (Assíncrono)
            setFilmes(dados);
            setLoading(false);
        }
        carregarDados();
    }, []);

    // Filtro simples em tempo real por título ou gênero
    const filmesFiltrados = filmes.filter((f) => {
        const termo = busca.toLowerCase().trim();
        if (!termo) return true;
        const tituloMatch = f.titulo?.toLowerCase().includes(termo);
        const generoMatch = f.genero?.toLowerCase().includes(termo);
        const anoMatch = String(f.ano).includes(termo);
        return tituloMatch || generoMatch || anoMatch;
    });

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E11D48" />
                <Text style={styles.loadingText}>Carregando catálogo...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Barra superior de ações */}
            <View style={styles.topBar}>
                <View style={styles.searchBox}>
                    <Text style={styles.searchIcon}>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar por título, gênero ou ano..."
                        placeholderTextColor="#64748B"
                        value={busca}
                        onChangeText={setBusca}
                        clearButtonMode="while-editing"
                    />
                    {busca.length > 0 && (
                        <TouchableOpacity onPress={() => setBusca('')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                            <Text style={styles.clearSearchIcon}>✕</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <TouchableOpacity
                    style={styles.favoritesButton}
                    onPress={() => navigation.navigate('Favorites')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.favoritesButtonText}>★ Meus Favoritos</Text>
                </TouchableOpacity>
            </View>

            {/* Listagem de Filmes */}
            <FlatList
                data={filmesFiltrados}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyIcon}>🎬</Text>
                        <Text style={styles.emptyText}>Nenhum filme encontrado</Text>
                        <Text style={styles.emptySubtext}>Tente pesquisar com outro termo</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.75}
                        // AQUI OCORRE A PASSAGEM DE PARÂMETROS
                        // Passamos o objeto inteiro 'item' para a próxima tela
                        onPress={() => navigation.navigate('Details', { filme: item })}
                    >
                        {/* Capa pública do Filme */}
                        <View style={styles.posterContainer}>
                            {item.capa ? (
                                <Image
                                    source={{ uri: item.capa }}
                                    style={styles.poster}
                                    resizeMode="cover"
                                />
                            ) : (
                                <View style={[styles.poster, styles.posterPlaceholder]}>
                                    <Text style={styles.placeholderIcon}>🎞️</Text>
                                </View>
                            )}
                        </View>

                        {/* Informações do Filme */}
                        <View style={styles.info}>
                            <Text style={styles.titulo} numberOfLines={2}>
                                {item.titulo}
                            </Text>

                            <View style={styles.metaRow}>
                                <View style={styles.anoBadge}>
                                    <Text style={styles.ano}>{item.ano}</Text>
                                </View>
                                {item.genero && (
                                    <Text style={styles.genero} numberOfLines={1}>
                                        {item.genero}
                                    </Text>
                                )}
                            </View>

                            {item.avaliacao && (
                                <View style={styles.ratingRow}>
                                    <Text style={styles.star}>★</Text>
                                    <Text style={styles.ratingText}>{item.avaliacao.toFixed(1)}</Text>
                                </View>
                            )}

                            <Text style={styles.sinopse} numberOfLines={2}>
                                {item.sinopse}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0F19'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B0F19'
    },
    loadingText: {
        marginTop: 12,
        color: '#94A3B8',
        fontSize: 14
    },
    topBar: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 8,
        gap: 10
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#151C2C',
        borderRadius: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#1E293B'
    },
    searchIcon: {
        marginRight: 8,
        fontSize: 14
    },
    clearSearchIcon: {
        color: '#94A3B8',
        fontSize: 14,
        paddingHorizontal: 4
    },
    searchInput: {
        flex: 1,
        color: '#F8FAFC',
        fontSize: 14,
        paddingVertical: 10
    },
    favoritesButton: {
        backgroundColor: '#1E293B',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#334155'
    },
    favoritesButtonText: {
        color: '#FBBF24',
        fontSize: 14,
        fontWeight: '600'
    },
    listContent: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 24
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#131A2A',
        borderRadius: 12,
        marginBottom: 14,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#1E293B',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    posterContainer: {
        width: 90,
        height: 135,
        backgroundColor: '#1E293B'
    },
    poster: {
        width: '100%',
        height: '100%'
    },
    posterPlaceholder: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    placeholderIcon: {
        fontSize: 28
    },
    info: {
        flex: 1,
        padding: 12,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 16,
        fontWeight: '700',
        color: '#F8FAFC',
        marginBottom: 4
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 4
    },
    anoBadge: {
        backgroundColor: '#1E293B',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4
    },
    ano: {
        fontSize: 11,
        fontWeight: '600',
        color: '#CBD5E1'
    },
    genero: {
        fontSize: 12,
        color: '#94A3B8'
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6
    },
    star: {
        color: '#FBBF24',
        fontSize: 13,
        marginRight: 4
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FBBF24'
    },
    sinopse: {
        fontSize: 12,
        lineHeight: 17,
        color: '#64748B'
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 48
    },
    emptyIcon: {
        fontSize: 40,
        marginBottom: 10
    },
    emptyText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#CBD5E1'
    },
    emptySubtext: {
        fontSize: 13,
        color: '#64748B',
        marginTop: 4
    }
});
