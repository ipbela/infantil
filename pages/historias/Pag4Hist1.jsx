import React, { useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import video4 from './videos/Video4Hist1.mp4';
import { Video } from 'expo-av';
import styles from './stylesHist';

export default function Pag4Hist1() {
    const navigation = useNavigation();
    const videoRef = useRef(null);

    // Função para navegação quando o vídeo terminar
    const handlePlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            navigation.navigate("Pergunta4Hist1"); 
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
                    source={video4}
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
                        No final, a Dra. Ana disse que Bella estava cuidando muito bem dos dentes, mas que era importante escovar sempre após as refeições e não comer muitos doces.
                    </Text>
                    <Text style={styles.bodyText2}>
                        - Bella, você gostaria de escolher uma escova de dentes nova? Temos uma com desenhos de animais ou outra com brilhos. Qual você quer?
                    </Text>
                </View>

            </LinearGradient>
        </View>
    );
}
