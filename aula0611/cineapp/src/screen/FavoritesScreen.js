// src/screen/FavoritesScreen.js
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavoritesScreen({ navigation }) {
    const [favoritos, setFavoritos] = useState([]);

    // Função para ler do Storage
    const carregarFavoritos = async () => {
        try {
            const dados = await AsyncStorage.getItem('@cinefatec_favoritos');
            if (dados) {
                setFavoritos(JSON.parse(dados));
            } else {
                setFavoritos([]);
            }
        } catch (e) {
            setFavoritos([]);
        }
    };

    // Carrega ao abrir a tela e sempre que a tela ganha foco
    useEffect(() => {
        carregarFavoritos();
        const unsubscribe = navigation.addListener('focus', () => {
            carregarFavoritos();
        });
        return unsubscribe;
    }, [navigation]);

    // Remove um único filme da lista
    const removerFilme = async (id, titulo) => {
        try {
            const novaLista = favoritos.filter((f) => f.id !== id);
            await AsyncStorage.setItem('@cinefatec_favoritos', JSON.stringify(novaLista));
            setFavoritos(novaLista);
        } catch (e) {
            Alert.alert('Erro', 'Não foi possível remover o filme.');
        }
    };

    // Limpa todos os favoritos com confirmação
    const limparLista = () => {
        if (favoritos.length === 0) return;

        Alert.alert(
            'Limpar Favoritos',
            'Tem certeza de que deseja remover todos os filmes da sua lista?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Limpar',
                    style: 'destructive',
                    onPress: async () => {
                        await AsyncStorage.removeItem('@cinefatec_favoritos');
                        setFavoritos([]);
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Meus Filmes Salvos</Text>
                <Text style={styles.subtitle}>
                    {favoritos.length === 1
                        ? '1 filme salvo'
                        : `${favoritos.length} filmes salvos`}
                </Text>
            </View>

            {/* Estado Vazio */}
            {favoritos.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyIcon}>⭐</Text>
                    <Text style={styles.emptyTitle}>Nenhum favorito ainda</Text>
                    <Text style={styles.emptyText}>
                        Navegue pelo catálogo e toque em "Salvar nos Favoritos" para criar sua lista personalizada.
                    </Text>
                    <TouchableOpacity
                        style={styles.btnExplorar}
                        onPress={() => navigation.navigate('Home')}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.btnExplorarText}>Explorar Filmes</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    {/* Lista de Favoritos */}
                    <FlatList
                        data={favoritos}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.listContent}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.card}
                                activeOpacity={0.75}
                                onPress={() => navigation.navigate('Details', { filme: item })}
                            >
                                <View style={styles.posterWrapper}>
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

                                <View style={styles.info}>
                                    <Text style={styles.titulo} numberOfLines={2}>
                                        {item.titulo}
                                    </Text>
                                    <View style={styles.metaRow}>
                                        <View style={styles.anoBadge}>
                                            <Text style={styles.anoText}>{item.ano}</Text>
                                        </View>
                                        {item.genero && (
                                            <Text style={styles.generoText} numberOfLines={1}>
                                                {item.genero}
                                            </Text>
                                        )}
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={styles.btnDelete}
                                    onPress={() => removerFilme(item.id, item.titulo)}
                                    hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                                >
                                    <Text style={styles.btnDeleteText}>✕</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    />

                    {/* Botão para limpar toda a lista */}
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.btnClearAll}
                            onPress={limparLista}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.btnClearAllText}>Limpar Todos os Favoritos</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0F19'
    },
    headerContainer: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 10
    },
    header: {
        fontSize: 22,
        fontWeight: '800',
        color: '#F8FAFC'
    },
    subtitle: {
        fontSize: 13,
        color: '#94A3B8',
        marginTop: 2
    },
    listContent: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 16
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#131A2A',
        borderRadius: 12,
        marginBottom: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#1E293B',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    posterWrapper: {
        width: 60,
        height: 85,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#1E293B'
    },
    poster: {
        width: '100%',
        height: '100%'
    },
    posterPlaceholder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeholderIcon: {
        fontSize: 20
    },
    info: {
        flex: 1,
        paddingHorizontal: 12
    },
    titulo: {
        fontSize: 15,
        fontWeight: '700',
        color: '#F8FAFC',
        marginBottom: 4
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    anoBadge: {
        backgroundColor: '#1E293B',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4
    },
    anoText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#CBD5E1'
    },
    generoText: {
        fontSize: 11,
        color: '#94A3B8'
    },
    btnDelete: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#1E293B',
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32
    },
    btnDeleteText: {
        color: '#F87171',
        fontSize: 14,
        fontWeight: '700'
    },
    footer: {
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderTopWidth: 1,
        borderTopColor: '#1E293B'
    },
    btnClearAll: {
        backgroundColor: '#1E293B',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#EF4444'
    },
    btnClearAllText: {
        color: '#EF4444',
        fontSize: 14,
        fontWeight: '600'
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32
    },
    emptyIcon: {
        fontSize: 48,
        marginBottom: 12
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#F8FAFC',
        marginBottom: 6
    },
    emptyText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#94A3B8',
        textAlign: 'center',
        marginBottom: 20
    },
    btnExplorar: {
        backgroundColor: '#E11D48',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8
    },
    btnExplorarText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600'
    }
});
