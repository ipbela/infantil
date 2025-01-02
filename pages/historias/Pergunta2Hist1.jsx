import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import sim from '../imgs/SIM.png';
import nao from '../imgs/NAO.png';
import styles from './stylesHist';

export default function Pergunta2Hist1() {
    const navigation = useNavigation();

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

                <View style={styles.contText2}>
                    <Text style={styles.bodyText4}>
                        O que Bella deve fazer?
                    </Text>
                    <Text style={styles.bodyText5}>A) Segurar o espelhinho e olhar os dentes no reflexo</Text>
                    <Text style={styles.bodyText5}>B) Dizer que está com medo e não querer segurar</Text>
                </View>

                <View style={styles.contText3}>
                    <Pressable onPress={() => navigation.navigate("RespostaSIMPage3Hist1")} style={styles.imageContainer}>
                        <Image source={sim} style={styles.imgs} />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate("RespostaNAOPage3Hist1")} style={styles.imageContainer}>
                        <Image source={nao} style={styles.imgs} />
                    </Pressable>
                </View>

            </LinearGradient>
        </View>
    );
}
