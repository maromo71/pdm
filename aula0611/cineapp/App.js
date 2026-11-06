import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import FavoritesScreen from './src/screen/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#0F172A',
                    },
                    headerTintColor: '#F8FAFC',
                    headerTitleStyle: {
                        fontWeight: '700',
                        fontSize: 18,
                    },
                    headerShadowVisible: false,
                    contentStyle: {
                        backgroundColor: '#0B0F19',
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Cine App' }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ title: 'Detalhes do Filme' }}
                />
                <Stack.Screen
                    name="Favorites"
                    component={FavoritesScreen}
                    options={{ title: 'Meus Favoritos' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
