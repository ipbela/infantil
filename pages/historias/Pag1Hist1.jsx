import React, { useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import video1 from './videos/Video1Hist1.mp4';
import { Video } from 'expo-av';
import styles from './stylesHist';

export default function Pag1Hist1() {
    const navigation = useNavigation();
    const videoRef = useRef(null);

     // Função para navegação quando o vídeo terminar
     const handlePlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            navigation.navigate("Pergunta1Hist1"); 
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
                    source={video1}
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
                        Era uma vez, uma menina chamada Bella que tinha um sorriso lindo. Ela adorava comer maçã, cenoura e, de vez em quando, um docinho. Certo dia, sua mãe disse:
                    </Text>
                    <Text style={styles.bodyText2}>
                        - Bella, hoje vamos visitar o dentista para cuidar dos seus dentes!
                    </Text>
                    <Text style={styles.bodyText3}>
                    Bella ficou um pouco nervosa. Ela nunca tinha ido ao dentista antes e não sabia o que esperar. Então, sua mãe explicou que o dentista era uma pessoa muito legal que ajudava a manter os dentes fortes e saudáveis.
                    </Text>
                </View>

            </LinearGradient>
        </View>
    );
}
