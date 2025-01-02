import React from 'react';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import back from '../imgs/return.png';
import bg from '../imgs/bgHome.png';
import hist1 from '../imgs/hist1.png';

export default function Historias() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Fundo gradiente */}
            <LinearGradient
                colors={['#7AC0E4', '#FDAFC9']}
                style={styles.gradientBackground}
            >
                {/* Imagem de fundo */}
                <ImageBackground source={bg} style={styles.imageBackground} />

                {/* Botão de voltar */}
                <View style={styles.div_top}>
                    <Pressable style={styles.back} onPress={() => navigation.navigate("Inicial")}>
                        <Image source={back} />
                    </Pressable>
                </View>

                {/* Título da página */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Histórias</Text>
                </View>

                {/* Botão de história */}
                <View style={styles.btn}>
                    <Text style={styles.btn_text}>A Aventura de Bella</Text>
                    <Pressable style={styles.btnHist} onPress={() => navigation.navigate("Pag1Hist1")}>
                        <Image source={hist1} style={styles.imghist1} />
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    );
}
