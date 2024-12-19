import React, { useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import video2 from './videos/Video2Hist1.mp4';
import { Video } from 'expo-av';
import styles from './stylesHist';

export default function Pag2Hist1() {
    const navigation = useNavigation();
    const videoRef = useRef(null);

    // Função para navegação quando o vídeo terminar
    const handlePlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            navigation.navigate("Pergunta2Hist1"); 
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                if (videoRef.current) {
                    videoRef.current.pauseAsync();
                }
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#7AC0E4', '#FDAFC9']}
                style={styles.gradientBackground}
            >
                <ImageBackground source={bg} style={styles.imageBackground} />

                <View style={styles.div_top}>
                    <Pressable style={styles.back} onPress={() => navigation.navigate("Historias")}>
                        <Image source={back} />
                    </Pressable>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>A Aventura de Bella</Text>
                </View>

                <Video
                    ref={videoRef}
                    source={video2}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    shouldPlay
                    useNativeControls
                    style={styles.video}
                    onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                />

                <View style={styles.contText}>
                    <Text style={styles.bodyText}>
                        Chegando ao consultório, Bella ficou surpresa. O lugar era branquinho, cheio de desenhos e cartazes nas paredes! Logo, uma moça simpática apareceu e disse:
                    </Text>
                    <Text style={styles.bodyText2}>
                        - Oi, Bella! Eu sou a Dra. Ana, a dentista. Vamos dar uma olhadinha nesses dentes brilhantes?
                    </Text>
                    <Text style={styles.bodyText3}>
                        Bella sentou na cadeira e a Dra. Ana mostrou um espelhinho pequeno.
                    </Text>
                    <Text style={styles.bodyText2}>
                        - Este é o "Espelho Mágico", ele vai me ajudar a ver os seus dentes bem de perto. Quer segurá-lo por um momento?
                    </Text>
                </View>

            </LinearGradient>
        </View>
    );
}
