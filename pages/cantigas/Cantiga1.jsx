import React, { useRef } from 'react';
import { View, Text, Pressable, Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import styles from './styles';
import back from '../imgs/return.png';
import { Video } from 'expo-av';
import cantigaVideo from '../imgs/Cantiga1.mp4';

export default function Cantiga1() {
    const navigation = useNavigation();
    const videoRef = useRef(null);

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
            <Pressable
                style={styles.div_top}
                onPress={() => navigation.navigate("Cantigas")}
            >
                <Image source={back} style={styles.iconBack} />
            </Pressable>

            <Text style={styles.titleCantiga}>Escova Escova</Text>

            <View style={styles.videoContainer}>
                <Video
                    ref={videoRef}
                    source={cantigaVideo}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    shouldPlay
                    useNativeControls
                    style={styles.video}
                />
            </View>
        </View>
    );
}
