import React from 'react';
import { View, Text, Image, Pressable, ImageBackground } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import dente from '../imgs/dente.png';

export default function ProximaRodada() {
    const route = useRoute();
    const { round } = route.params;

    return (
        <View style={styles.contRound}>
            <Text style={styles.text}>RODADA {round}</Text>
            <Image source={dente} style={styles.imgDente}></Image>
        </View>
    );
}
