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
import Pag1Hist1 from "./historias/Pag1Hist1";
import Pergunta1Hist1 from "./historias/Pergunta1Hist1";
import RespostaOKPage2Hist1 from "./historias/RespostaOKPage2Hist1";
import RespostaErrada1Page2Hist1 from "./historias/RespostaErrada1Page2Hist1";
import RespostaErrada2Page2Hist1 from "./historias/RespostaErrada2Page2Hist1";
import Pag2Hist1 from "./historias/Pag2Hist1";
import Pergunta2Hist1 from "./historias/Pergunta2Hist1";
import RespostaSIMPage3Hist1 from "./historias/RespostaSIMPage3Hist1";
import RespostaNAOPage3Hist1 from "./historias/RespostaNAOPage3Hist1";
import Pag3Hist1 from "./historias/Pag3Hist1";
import Pergunta3Hist1 from "./historias/Pergunta3Hist1";
import RespostaNAOPage4Hist1 from "./historias/RespostaNAOPage4Hist1";
import RespostaSIMPage4Hist1 from "./historias/RespostaSIMPage4Hist1";
import Pag4Hist1 from "./historias/Pag4Hist1";
import Pergunta4Hist1 from "./historias/Pergunta4Hist1";
import RespostaOKPage5Hist1 from "./historias/RespostaOKPage5Hist1";
import Pag5Hist1 from "./historias/Pag5Hist1";
import FimHist1 from "./historias/FimHist1";

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
        <Stack.Screen
          name="Pag1Hist1"
          component={Pag1Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pergunta1Hist1"
          component={Pergunta1Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RespostaOKPage2Hist1"
          component={RespostaOKPage2Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RespostaErrada1Page2Hist1"
          component={RespostaErrada1Page2Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RespostaErrada2Page2Hist1"
          component={RespostaErrada2Page2Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pag2Hist1"
          component={Pag2Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pergunta2Hist1"
          component={Pergunta2Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RespostaSIMPage3Hist1"
          component={RespostaSIMPage3Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RespostaNAOPage3Hist1"
          component={RespostaNAOPage3Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pag3Hist1"
          component={Pag3Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pergunta3Hist1"
          component={Pergunta3Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RespostaNAOPage4Hist1"
          component={RespostaNAOPage4Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RespostaSIMPage4Hist1"
          component={RespostaSIMPage4Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pag4Hist1"
          component={Pag4Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pergunta4Hist1"
          component={Pergunta4Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RespostaOKPage5Hist1"
          component={RespostaOKPage5Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pag5Hist1"
          component={Pag5Hist1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FimHist1"
          component={FimHist1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
