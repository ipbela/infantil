import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Animacao = () => {
  const [showImage, setShowImage] = useState(false); // Estado para controlar a exibição da imagem
  const [showBox, setShowBox] = useState(true); // Estado para controlar a exibição do quadrado
  const [bgColor, setBgColor] = useState(require('../assets/bgloading.png')); // Estado para controlar a cor do fundo
  const rotation = useRef(new Animated.Value(0)).current; // Para rotação
  const scale = useRef(new Animated.Value(1)).current; // Para escala (aproximar e afastar)

  const navigation = useNavigation(); // Para navegação

  useEffect(() => {
    // Animação de rotação circular e de escala
    Animated.loop(
      Animated.parallel([
        // Animação de rotação contínua
        Animated.timing(rotation, {
          toValue: 1, // 1 significa uma rotação completa (360 graus)
          duration: 3000, // Duração de 3 segundos por ciclo de rotação
          useNativeDriver: true,
        }),
        // Animação de escala (aproximar e afastar)
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.5, // Aumenta a escala (aproxima)
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 0, // Diminui a escala (afasta)
            duration: 1500,
            useNativeDriver: true,
          }),
        ]), 
      ])
    ).start();

    // Após 5 segundos, exibe a imagem e remove o quadrado
    const timer = setTimeout(() => {
      setShowImage(true); // Exibe a imagem
      setShowBox(false); // Remove o quadrado
      setBgColor('white'); // Muda o fundo para branco
      setTimeout(() => {
        navigation.navigate('Inicial'); // Navega para a tela "Inicial"
      }, 2000); // Espera 2 segundos para exibir a imagem antes de navegar
    }, 5000); // Espera 5 segundos antes de exibir a imagem e navegar

    // Limpeza do timer ao desmontar o componente
    return () => clearTimeout(timer);
  }, [navigation]);

  // Definindo o estilo do quadrado com animações de rotação e escala
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1], // O valor vai de 0 a 1
    outputRange: ['0deg', '360deg'], // A rotação vai de 0 a 360 graus
  });

  return (
    <ImageBackground source={bgColor} style={styles.container}>
      {showBox && (
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                { rotate: rotateInterpolate }, // Aplicando a rotação
                { scale }, // Aplicando a escala (aproxima e afasta)
              ],
            },
          ]}
        />
      )}
      {showImage && (
        <Image
          source={require('../assets/sorria.png')}
          style={styles.image} // Estilo para ocupar a tela inteira
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'white', // Quadrado branco
  },
  image: {
    width: '100%',  // Largura 100% para preencher a tela
    height: '100%', // Altura 100% para preencher a tela
    resizeMode: 'cover', // Ajusta a imagem para cobrir a tela sem distorcer
  },
});

export default Animacao;
