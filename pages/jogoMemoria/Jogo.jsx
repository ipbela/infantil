import React from 'react';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from './stylesj';
import back from '../imgs/return.png';
import bg from '../imgs/bgHome.png';

export default function Jogo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#7AC0E4', '#FDAFC9']}
                style={styles.gradientBackground}
            >
                <ImageBackground source={bg} style={styles.imageBackground} />

                <View style={styles.div_top}>
                    <Pressable style={styles.back} onPress={() => navigation.navigate("Inicial")}>
                        <Image source={back} />
                    </Pressable>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Jogo da Memória</Text>
                </View>

                <View style={styles.btn}>
                    <Pressable style={styles.btn_opcao} onPress={() => navigation.navigate("JogoMemoria")}>
                        <Text style={styles.btn_text}>Começar</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    );
}
