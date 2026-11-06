// src/screen/DetailsScreen.js
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Alert,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Recebemos "route" para acessar os parâmetros enviados pela Home
export default function DetailsScreen({ route, navigation }) {
    // Desestruturação para pegar o parâmetro "filme"
    const { filme } = route.params;

    const [isFavorito, setIsFavorito] = useState(false);

    // Verifica se o filme já está salvo ao carregar a tela
    useEffect(() => {
        async function verificarFavorito() {
            try {
                const favoritosAtuais = await AsyncStorage.getItem('@cinefatec_favoritos');
                if (favoritosAtuais) {
                    const lista = JSON.parse(favoritosAtuais);
                    const existe = lista.some((f) => f.id === filme.id);
                    setIsFavorito(existe);
                }
            } catch (e) {
                // Silencioso na checagem inicial
            }
        }
        verificarFavorito();
    }, [filme.id]);

    // Função para Persistir Dados (AsyncStorage)
    const salvarFavorito = async () => {
        try {
            // 1. Ler o que já existe salvo
            const favoritosAtuais = await AsyncStorage.getItem('@cinefatec_favoritos');
            let listaSalva = favoritosAtuais ? JSON.parse(favoritosAtuais) : [];

            // 2. Verificar se já não está salvo
            const jaExiste = listaSalva.find((f) => f.id === filme.id);
            if (jaExiste) {
                Alert.alert('Aviso', 'Este filme já está nos favoritos!');
                return;
            }

            // 3. Adicionar o novo e salvar
            listaSalva.push(filme);
            await AsyncStorage.setItem('@cinefatec_favoritos', JSON.stringify(listaSalva));

            setIsFavorito(true);
            Alert.alert('Sucesso', 'Filme salvo nos favoritos!');
        } catch (e) {
            Alert.alert('Erro', 'Não foi possível salvar.');
        }
    };

    // Função para remover dos favoritos
    const removerFavorito = async () => {
        try {
            const favoritosAtuais = await AsyncStorage.getItem('@cinefatec_favoritos');
            if (favoritosAtuais) {
                let listaSalva = JSON.parse(favoritosAtuais);
                listaSalva = listaSalva.filter((f) => f.id !== filme.id);
                await AsyncStorage.setItem('@cinefatec_favoritos', JSON.stringify(listaSalva));
                setIsFavorito(false);
                Alert.alert('Removido', 'Filme removido dos seus favoritos.');
            }
        } catch (e) {
            Alert.alert('Erro', 'Não foi possível remover.');
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Capa Principal com Destaque */}
            <View style={styles.posterSection}>
                <View style={styles.posterWrapper}>
                    {filme.capa ? (
                        <Image
                            source={{ uri: filme.capa }}
                            style={styles.poster}
                            resizeMode="cover"
                        />
                    ) : (
                        <View style={[styles.poster, styles.posterPlaceholder]}>
                            <Text style={styles.placeholderIcon}>🎞️</Text>
                        </View>
                    )}
                </View>
            </View>

            {/* Cabeçalho do Filme */}
            <View style={styles.headerSection}>
                <Text style={styles.tituloGrande}>{filme.titulo}</Text>

                <View style={styles.tagsContainer}>
                    <View style={styles.anoBadge}>
                        <Text style={styles.anoText}>{filme.ano}</Text>
                    </View>

                    {filme.genero && (
                        <View style={styles.generoBadge}>
                            <Text style={styles.generoText}>{filme.genero}</Text>
                        </View>
                    )}

                    {filme.avaliacao && (
                        <View style={styles.ratingBadge}>
                            <Text style={styles.starIcon}>★</Text>
                            <Text style={styles.ratingValue}>{filme.avaliacao.toFixed(1)}</Text>
                        </View>
                    )}
                </View>
            </View>

            {/* Card com a Sinopse */}
            <View style={styles.synopsisCard}>
                <Text style={styles.sectionLabel}>SINOPSE</Text>
                <Text style={styles.sinopse}>{filme.sinopse}</Text>
            </View>

            {/* Botão de Ação: Salvar ou Remover dos Favoritos */}
            <View style={styles.actionContainer}>
                {isFavorito ? (
                    <TouchableOpacity
                        style={styles.btnRemover}
                        onPress={removerFavorito}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.btnRemoverText}>✕ Remover dos Favoritos</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.btnSalvar}
                        onPress={salvarFavorito}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.btnSalvarText}>★ Salvar nos Favoritos</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0F19'
    },
    content: {
        padding: 20,
        paddingBottom: 40
    },
    posterSection: {
        alignItems: 'center',
        marginVertical: 10
    },
    posterWrapper: {
        width: 180,
        height: 270,
        borderRadius: 14,
        overflow: 'hidden',
        backgroundColor: '#1E293B',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        borderWidth: 1,
        borderColor: '#334155'
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
        fontSize: 48
    },
    headerSection: {
        alignItems: 'center',
        marginVertical: 16
    },
    tituloGrande: {
        fontSize: 22,
        fontWeight: '800',
        color: '#F8FAFC',
        textAlign: 'center',
        marginBottom: 10
    },
    tagsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 8
    },
    anoBadge: {
        backgroundColor: '#1E293B',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#334155'
    },
    anoText: {
        color: '#CBD5E1',
        fontSize: 12,
        fontWeight: '600'
    },
    generoBadge: {
        backgroundColor: '#131A2A',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#1E293B'
    },
    generoText: {
        color: '#94A3B8',
        fontSize: 12
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#272016',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#78350F'
    },
    starIcon: {
        color: '#FBBF24',
        fontSize: 12,
        marginRight: 4
    },
    ratingValue: {
        color: '#FBBF24',
        fontSize: 12,
        fontWeight: '700'
    },
    synopsisCard: {
        backgroundColor: '#131A2A',
        borderRadius: 12,
        padding: 18,
        borderWidth: 1,
        borderColor: '#1E293B',
        marginVertical: 12
    },
    sectionLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: '#64748B',
        letterSpacing: 1,
        marginBottom: 8
    },
    sinopse: {
        fontSize: 15,
        lineHeight: 23,
        color: '#CBD5E1'
    },
    actionContainer: {
        marginTop: 14
    },
    btnSalvar: {
        backgroundColor: '#E11D48',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#E11D48',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5
    },
    btnSalvarText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700'
    },
    btnRemover: {
        backgroundColor: '#1E293B',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#DC2626'
    },
    btnRemoverText: {
        color: '#F87171',
        fontSize: 15,
        fontWeight: '600'
    }
});
