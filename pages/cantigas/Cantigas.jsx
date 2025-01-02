import React from 'react';
import { View, Text, Pressable, ImageBackground, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import back from '../imgs/return.png';
import bg from '../imgs/bgHome.png';
import cantiga1 from '../imgs/cantiga1.png';
import cantiga2 from '../imgs/cantiga2.png';
import cantiga3 from '../imgs/cantiga3.png';
import cantiga4 from '../imgs/cantiga4.png';

export default function Cantigas() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#7AC0E4', '#FDAFC9']}
                style={styles.gradientBackground}
            >
                <ImageBackground source={bg} style={styles.imageBackground}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <Pressable
                            style={styles.div_top}
                            onPress={() => navigation.navigate("Inicial")}
                        >
                            <Image source={back} style={styles.iconBack} />
                        </Pressable>

                        <Text style={styles.title}>Cantigas</Text>

                        <View style={styles.boxes}>
                            <Pressable
                                style={styles.box}
                                onPress={() => navigation.navigate("Cantiga1")}
                            >
                                <Image source={cantiga1} style={styles.imageBox} />
                            </Pressable>

                            <Pressable
                                style={styles.box}
                                onPress={() => navigation.navigate("Cantiga2")}
                            >
                                <Image source={cantiga2} style={styles.imageBox} />
                            </Pressable>

                            <Pressable
                                style={styles.box}
                                onPress={() => navigation.navigate("Cantiga3")}
                            >
                                <Image source={cantiga3} style={styles.imageBox} />
                            </Pressable>

                            <Pressable
                                style={styles.box}
                                onPress={() => navigation.navigate("Cantiga4")}
                            >
                                <Image source={cantiga4} style={styles.imageBox} />
                            </Pressable>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </LinearGradient>
        </View>
    );
}
