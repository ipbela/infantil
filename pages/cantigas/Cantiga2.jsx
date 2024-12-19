import React, { useRef } from 'react';
import { View, Text, Pressable, Image } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import styles from './styles';
import back from '../imgs/return.png';
import star from '../imgs/star.png';
import { Video } from 'expo-av';
import cantigaVideo from '../imgs/Cantiga2.mp4';

export default function Cantiga2() {
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
        <View style={styles.contCantiga1}>
            <View style={styles.div_top}>
                <Pressable style={styles.back} onPress={() => navigation.navigate("Cantigas")}>
                    <Image source={back} />
                </Pressable>
            </View>

            <View style={styles.stars}>
                <Image source={star} style={styles.star1} />
                <Image source={star} style={styles.star2} />
                <Image source={star} style={styles.star3} />
                <Image source={star} style={styles.star4} />
                <Image source={star} style={styles.star5} />
            </View>

            <View style={styles.titleCantiga}>
                <Text style={styles.subCantiga}>Sorriso Brilhante</Text>
            </View>

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
