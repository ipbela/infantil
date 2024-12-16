import React from 'react';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from './styles';
import back from '../imgs/return.png';
import star from '../imgs/star.png';
import { Video } from 'expo-av';
import cantigaVideo from '../imgs/Cantiga1.mp4';

export default function Cantiga1() {
    const navigation = useNavigation();

    return (
        <View style={styles.contCantiga1}>
            <View style={styles.div_top}>
                <Pressable style={styles.back} onPress={() => navigation.navigate("Inicial")}>
                    <Image source={back} />
                </Pressable>
            </View>

            <View style={styles.stars}>
                <Image source={star} style={styles.star1}/>
                <Image source={star} style={styles.star2}/>
                <Image source={star} style={styles.star3}/>
                <Image source={star} style={styles.star4}/>
                <Image source={star} style={styles.star5}/>
            </View>

            <View style={styles.titleCantiga}>
                <Text style={styles.subCantiga}>Escova Escova</Text>
            </View>

            {/* Player de vídeo */}
            <View style={styles.videoContainer}>
                <Video
                    source={cantigaVideo}
                    rate={1.0} // Velocidade do vídeo
                    volume={1.0} // Volume do áudio
                    isMuted={false}
                    resizeMode="contain"
                    shouldPlay // Inicia automaticamente
                    useNativeControls // Controles de reprodução
                    style={styles.video}
                />
            </View>
        </View>
    );
}

