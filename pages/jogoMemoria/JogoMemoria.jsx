import React, { useRef, useState } from 'react';
import { Pressable, View, Text, Image, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Card from './Card';
import styles from './styles';
import back from '../imgs/return.png';

export default function JogoMemoria() {
    const navigation = useNavigation();

    const initialCards = () => [
        { id: 0, name: 'Carie', status: '', img: require('../cards/carie.png') },
        { id: 0, name: 'Carie', status: '', img: require('../cards/carie.png') },
        { id: 1, name: 'Creme Dental', status: '', img: require('../cards/cremedental.png') },
        { id: 1, name: 'Creme Dental', status: '', img: require('../cards/cremedental.png') },
        { id: 2, name: 'Dente', status: '', img: require('../cards/dente.png') },
        { id: 2, name: 'Dente', status: '', img: require('../cards/dente.png') },
        { id: 3, name: 'Dentista', status: '', img: require('../cards/dentista.png') },
        { id: 3, name: 'Dentista', status: '', img: require('../cards/dentista.png') },
        { id: 4, name: 'Escova', status: '', img: require('../cards/escova.png') },
        { id: 4, name: 'Escova', status: '', img: require('../cards/escova.png') },
        { id: 5, name: 'Fio Dental', status: '', img: require('../cards/fiodental.png') },
        { id: 5, name: 'Fio Dental', status: '', img: require('../cards/fiodental.png') },
    ].sort(() => Math.random() - 0.5);

    const [cards, setCards] = useState(initialCards());
    const [previousCardState, setPreviousCardState] = useState(-1);
    const previousIndex = useRef(-1);
    const [round, setRound] = useState(1); // Controle da rodada
    const [completed, setCompleted] = useState(false); // Verifica se todas as cartas foram viradas

    const matchCheck = (currentCard) => {
        if (cards[currentCard].id === cards[previousCardState].id) {
            cards[previousCardState].status = 'matched';
            cards[currentCard].status = 'matched';
            setPreviousCardState(-1);

            // Verifica se todas as cartas estão viradas
            if (cards.every(card => card.status === 'matched')) {
                setCompleted(true);
            }
        } else {
            cards[currentCard].status = 'active';
            setCards([...cards]);
            setTimeout(() => {
                cards[currentCard].status = '';
                cards[previousCardState].status = '';
                setPreviousCardState(-1);
                setCards([...cards]);
            }, 1000);
        }
    };

    const clickHandler = (index) => {
        if (index !== previousIndex.current && cards[index].status !== 'matched') {
            if (previousCardState === -1) {
                previousIndex.current = index;
                cards[index].status = 'active';
                setCards([...cards]);
                setPreviousCardState(index);
            } else {
                matchCheck(index);
                previousIndex.current = -1;
            }
        }
    };

    const nextLevel = () => {
        if (completed) {
            if (round < 3) {
                setCompleted(false);
                setRound(round + 1);

                // Navega para a página de "Próxima Rodada"
                navigation.navigate("ProximaRodada", {round: round + 1});

                setTimeout(() => {
                    setRound(round + 1);
                    setCards(initialCards());
                    navigation.navigate("JogoMemoria");
                }, 3000); // Espera 3 segundos antes de ir para a próxima rodada
            } else {
                Alert.alert("Parabéns!", "Você completou todas as rodadas!");
                navigation.navigate("Jogo")
            }
        } else {
            Alert.alert("Atenção", "Você precisa virar todas as cartas antes de avançar!");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.div_top}>
                <Pressable style={styles.back} onPress={() => navigation.navigate("Inicial")}>
                    <Image source={back} />
                </Pressable>
            </View>
            <View>
                <Text style={styles.round}>RODADA {round}</Text>
            </View>
            <View style={styles.cardsContainer}>
                {cards.map((card, index) => (
                    <Card key={index} card={card} index={index} clickHandler={clickHandler} />
                ))}
            </View>
            <View style={styles.nextContainer}>
                <Pressable
                    style={{
                        backgroundColor: completed ? '#FFFF00' : '#A9A9A9',
                        borderRadius: 100,
                        padding: 15,
                    }}
                    onPress={nextLevel}
                >
                    <Text style={{ textAlign: 'center', color: completed ? '#000' : '#FFF' , fontFamily: "Chicle", fontSize: 30}}>
                        {completed ? 'Próximo Nível' : 'Complete a Rodada'}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
