import React, { useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import video5 from './videos/Video5Hist1.mp4';
import { Video } from 'expo-av';
import styles from './stylesHist';

export default function Pag5Hist1() {
    const navigation = useNavigation();
    const videoRef = useRef(null);

    // Função para navegação quando o vídeo terminar
    const handlePlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            navigation.navigate("FimHist1"); 
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
                    source={video5}
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
                    <Text style={[styles.bodyText, { marginTop: '-5%' }]}>
                        Depois de escolher a escova, Bella saiu do consultório com um grande sorriso. Ela estava orgulhosa por ter enfrentado o dentista com coragem e se divertiu muito na aventura.
                    </Text>
                    <Text style={[styles.bodyText2, {marginTop: '2%'}]}>
                        - Vamos voltar daqui a seis meses para outra visita, combinado? - disse a Dra. Ana.
                    </Text>
                    <Text style={[styles.bodyText3, {marginTop: '2%'}]}>
                        Bella concordou e, no caminho para casa, já estava ansiosa para contar para seus amigos como foi divertida sua ida ao dentista!
                    </Text>
                    <Text style={[styles.bodyText2, {marginTop: '2%'}]}>
                        <Text style={{fontWeight: '900'}}>Moral da história: </Text>
                        <Text>Ir ao dentista pode ser divertido e não precisa ser assustador! Cuidar dos dentes é uma grande aventura e traz muitos sorrisos brilhantes!</Text>
                    </Text>
                </View>

            </LinearGradient>
        </View>
    );
}
