import React from 'react';
import { View, Text, Pressable, ImageBackground, Image, ScrollView, Dimensions, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from './styles';
import bg from '../imgs/bgHome.png';
import music from '../imgs/music.png';
import history from '../imgs/history.png';
import game from '../imgs/game.png';
import dente from '../imgs/dente.png';

export default function Inicial() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ImageBackground source={bg} style={styles.imageBackground}>
                    {/* Parte branca no topo */}
                    <View style={styles.quadWhite}>
                        <Image source={dente} style={styles.logo} />
                    </View>

                    {/* Botões abaixo */}
                    <View style={styles.opcoes}>
                        <Pressable style={styles.btn_opcao} onPress={() => navigation.navigate("Cantigas")}>
                            <Image source={music} style={styles.icon} />
                            <Text style={styles.btn_text}>Cantigas</Text>
                        </Pressable>
                        <Pressable style={styles.btn_opcao} onPress={() => navigation.navigate("Historias")}>
                            <Image source={history} style={styles.icon} />
                            <Text style={styles.btn_text}>Histórias</Text>
                        </Pressable>
                        <Pressable style={styles.btn_opcao} onPress={() => navigation.navigate("Jogo")}>
                            <Image source={game} style={styles.icon} />
                            <Text style={styles.btn_text}>Jogo</Text>
                        </Pressable>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}
