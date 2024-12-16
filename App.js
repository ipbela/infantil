import { Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import Routers from './pages/routers';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Chicle: require('./assets/fonts/Chicle-Regular.ttf'), // Caminho exato para a fonte
  });

  // Verifique se a fonte foi carregada
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Routers/>
  );
}
