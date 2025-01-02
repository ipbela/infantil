import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Animacao = () => {
  const [showImage, setShowImage] = useState(false); // Estado para controlar a exibição da imagem
  const [showBox, setShowBox] = useState(true); // Estado para controlar a exibição do quadrado
  const [bgColor, setBgColor] = useState(require('../assets/bgloading.png')); // Fundo inicial
  const rotation = useRef(new Animated.Value(0)).current; // Para rotação
  const scale = useRef(new Animated.Value(1)).current; // Para escala (aproximar e afastar)

  const navigation = useNavigation(); // Para navegação
  const { width, height } = Dimensions.get('window'); // Obter dimensões da tela

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
            toValue: 1.2, // Aumenta a escala (aproxima)
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1, // Volta ao tamanho original
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
    backgroundColor: 'white', // Fundo padrão para evitar discrepâncias
    width: '100%',
    height: '100%'
  },
  box: {
    width: Dimensions.get('window').width * 0.2, // 20% da largura da tela
    height: Dimensions.get('window').width * 0.2, // Quadrado proporcional à largura
    backgroundColor: 'white', // Quadrado branco
    shadowColor: '#000', // Sombra para destaque
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Sombra no Android
  },
  image: {
    width: Dimensions.get('window').width, // Ocupa 100% da largura da tela
    height: Dimensions.get('window').height, // Ocupa 100% da altura da tela
    resizeMode: 'cover', // Ajusta a imagem para cobrir a tela sem distorcer
  },
});

export default Animacao;
