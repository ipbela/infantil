import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Animacao from "./Animacao";
import Inicial from "./inicial/Inicial";
import Cantigas from "./cantigas/Cantigas";
import Historias from "./historias/Historias";
import JogoMemoria from "./jogoMemoria/JogoMemoria";
import Jogo from "./jogoMemoria/Jogo";
import ProximaRodada from "./jogoMemoria/ProximaRodada";
import Cantiga1 from "./cantigas/Cantiga1";
import Cantiga2 from "./cantigas/Cantiga2";
import Cantiga3 from "./cantigas/Cantiga3";
import Cantiga4 from "./cantigas/Cantiga4";

const Stack = createNativeStackNavigator();

export default function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Animacao">
        <Stack.Screen
          name="Animacao"
          component={Animacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inicial"
          component={Inicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cantigas"
          component={Cantigas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Historias"
          component={Historias}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Jogo"
          component={Jogo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JogoMemoria"
          component={JogoMemoria}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProximaRodada"
          component={ProximaRodada}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cantiga1"
          component={Cantiga1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cantiga2"
          component={Cantiga2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cantiga3"
          component={Cantiga3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cantiga4"
          component={Cantiga4}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
