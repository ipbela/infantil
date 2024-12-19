import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import bg from '../imgs/bgHome.png';
import back from '../imgs/return.png';
import correto from '../imgs/correto.png';
import styles from './stylesHist';

export default function RespostaOKPage2Hist1() {
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
                        <Text style={{textAlign: 'center', fontSize: 23}}>Levar a escova de dentes vai ajudar o dentista a ensinar como escovar corretamente.</Text>
                    </Text>
                </View>

                <View style={styles.contText3}>
                    <Image source={correto} style={styles.imgCorreto} />
                    <Text style={styles.textCorreto}>MUITO BEM!</Text>
                    <Pressable style={styles.btn_opcao} onPress={() => navigation.navigate("Pag2Hist1")}>
                        <Text style={styles.btn_text}>CONTINUAR</Text>
                    </Pressable>
                </View>

            </LinearGradient>
        </View>
    );
}
