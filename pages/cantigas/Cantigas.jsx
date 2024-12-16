import React from 'react';
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
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
                <ImageBackground source={bg} style={styles.imageBackground} />

                <View style={styles.div_top}>
                    <Pressable style={styles.back} onPress={() => navigation.navigate("Inicial")}>
                        <Image source={back} />
                    </Pressable>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Cantigas</Text>
                </View>

                <View style={styles.boxs}>
                    <Pressable style={styles.box} onPress={() => navigation.navigate("Cantiga1")}>
                        <Image source={cantiga1} style={styles.imageBox1} />
                    </Pressable>

                    <Pressable style={styles.box} onPress={() => navigation.navigate("Cantiga2")}>
                        <Image source={cantiga2} style={styles.imageBox2} />
                    </Pressable>

                    <Pressable style={styles.box} onPress={() => navigation.navigate("Cantiga3")}>
                        <Image source={cantiga3} style={styles.imageBox3} />
                    </Pressable>

                    <Pressable style={styles.box} onPress={() => navigation.navigate("Cantiga4")}>
                        <Image source={cantiga4} style={styles.imageBox4} />
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    );
}
