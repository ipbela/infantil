import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import errado from '../imgs/errado.png';
import styles from './stylesHist';

export default function RespostaErrada2Page2Hist1() {
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
                        <Text style={{textAlign: 'center', fontSize: 16}}>Doce em excesso poder causar problemas dentários como cárie, o açúcar alimenta bactérias que produzem ácidos que corroem o esmalte dos dentes. Logo, levar o pirulito não é uma boa opção.</Text>
                    </Text>
                </View>

                <View style={styles.contText3}>
                    <Image source={errado} style={styles.imgCorreto} />
                    <Text style={styles.textCorreto}>TENTE DE NOVO</Text>
                    <Pressable style={styles.btn_opcao} onPress={() => navigation.navigate("Pag2Hist1")}>
                        <Text style={styles.btn_text}>CONTINUAR</Text>
                    </Pressable>
                </View>

            </LinearGradient>
        </View>
    );
}
