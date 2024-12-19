import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import escova from '../imgs/Escova.png';
import urso from '../imgs/Urso.png';
import pirulito from '../imgs/Pirulito.png';
import styles from './stylesHist';

export default function Pergunta1Hist1() {
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
                        O que você acha que Bella deve levar com ela para o dentista?
                    </Text>
                    <Text style={styles.bodyText5}>A) Uma escova de dente</Text>
                    <Text style={styles.bodyText5}>B) Um brinquedo</Text>
                    <Text style={styles.bodyText5}>C) Um pirulito</Text>
                </View>

                <View style={styles.contText3}>
                    <Pressable onPress={() => navigation.navigate("RespostaOKPage2Hist1")} style={styles.imageContainer}>
                        <Image source={escova} style={styles.imgs} />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate("RespostaErrada1Page2Hist1")} style={styles.imageContainer}>
                        <Image source={urso} style={styles.imgs} />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate("RespostaErrada2Page2Hist1")} style={styles.imageContainer}>
                        <Image source={pirulito} style={styles.imgs} />
                    </Pressable>
                </View>

            </LinearGradient>
        </View>
    );
}
