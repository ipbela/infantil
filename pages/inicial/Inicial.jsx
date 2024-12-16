import React from 'react';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
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
        <View style={styles.container}>
            <View style={styles.solidBackground}>
                <ImageBackground source={bg} style={styles.imageBackground}>

                    <View style={styles.quadWhite}>
                        <Image source={dente} style={styles.logo}></Image>
                    </View>

                    <View style={styles.opcoes}>
                        <Pressable style={styles.btn_opcao} onPress={() => navigation.navigate("Cantigas")}>
                            <Image source={music}></Image>
                            <Text style={styles.btn_text}>Cantigas</Text>
                        </Pressable>
                        <Pressable style={styles.btn_opcao} onPress={() => navigation.navigate("Historias")}>
                            <Image source={history}></Image>
                            <Text style={styles.btn_text}>Histórias</Text>
                        </Pressable>
                        <Pressable style={styles.btn_opcao} onPress={() => navigation.navigate("Jogo")}>
                            <Image source={game}></Image>
                            <Text style={styles.btn_text}>Jogo</Text>
                        </Pressable>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}
