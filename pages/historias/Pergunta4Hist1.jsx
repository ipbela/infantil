import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import vermelha from '../imgs/Vermelha.png';
import rosa from '../imgs/Rosa.png';
import styles from './stylesHist';

export default function Pergunta4Hist1() {
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
                        Qual escova Bella deve escolher?
                    </Text>
                    <Text style={styles.bodyText5}>A) A escova vermelha</Text>
                    <Text style={styles.bodyText5}>B) A escova rosa</Text>
                </View>

                <View style={styles.contText3}>
                    <Pressable onPress={() => navigation.navigate("RespostaOKPage5Hist1")} style={styles.imageContainer}>
                        <Image source={vermelha} style={styles.imgs} />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate("RespostaOKPage5Hist1")} style={styles.imageContainer}>
                        <Image source={rosa} style={styles.imgs} />
                    </Pressable>
                </View>

            </LinearGradient>
        </View>
    );
}
