import React from 'react';
import { View, Text, Image, Pressable, ImageBackground } from 'react-native';
import styles from './styles';

export default function Card({ card, index, clickHandler }) {
    return (
        <Pressable onPress={() => clickHandler(index)} style={styles.card}>
            {card.status === 'active' || card.status === 'matched' ? (
                <Image style={styles.img} source={card.img} />
            ) : (
                <ImageBackground
                    source={require('../cards/frente.png')} // Substituir o fundo azul pelo dente
                    style={styles.background}
                >
                    <Text></Text>
                </ImageBackground>
            )}
        </Pressable>
    );
}
