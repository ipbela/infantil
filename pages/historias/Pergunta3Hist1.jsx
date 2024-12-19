import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import barulho1 from '../imgs/barulho1.png';
import barulho2 from '../imgs/barulho2.png';
import barulho3 from '../imgs/barulho3.png';
import styles from './stylesHist';

export default function Pergunta3Hist1() {
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
                        Qual som engraçado o sugador faz?
                    </Text>
                    <Text style={styles.bodyText5}>A) Zzzzzzzzz</Text>
                    <Text style={styles.bodyText5}>B) Ploft ploft</Text>
                    <Text style={styles.bodyText5}>C) Pip pip pip</Text>
                </View>

                <View style={styles.contText3}>
                    <Pressable onPress={() => navigation.navigate("RespostaSIMPage4Hist1")} style={styles.imageContainer}>
                        <Image source={barulho1} style={styles.imgs} />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate("RespostaNAOPage4Hist1")} style={styles.imageContainer}>
                        <Image source={barulho2} style={styles.imgs} />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate("RespostaNAOPage4Hist1")} style={styles.imageContainer}>
                        <Image source={barulho3} style={styles.imgs} />
                    </Pressable>
                </View>

            </LinearGradient>
        </View>
    );
}
