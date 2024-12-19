import React, { useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import video3 from './videos/Video3Hist1.mp4';
import { Video } from 'expo-av';
import styles from './stylesHist';

export default function Pag3Hist1() {
    const navigation = useNavigation();
    const videoRef = useRef(null);

    // Função para navegação quando o vídeo terminar
    const handlePlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            navigation.navigate("Pergunta3Hist1"); 
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
                    source={video3}
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
                        Depois de brincar com o espelhinho, a Dra. Ana usou uma escovinha especial que fazia cócegas nos dentes. Bella riu tanto que quase caiu da cadeira!
                    </Text>
                    <Text style={styles.bodyText2}>
                        - Agora, vou usar o "Sugador de Pirulitos" para tirar toda a aguinha da sua boca. Ele faz um som engraçado, como "zzzzzzzzzzzz". 	Vamos lá?
                    </Text>
                    <Text style={styles.bodyText3}>
                        Bella estava curiosa para ouvir o barulho, então abriu bem a boca e deixou a Dra. Ana usar o aparelho. Era mesmo engraçado!
                    </Text>
                </View>

            </LinearGradient>
        </View>
    );
}
