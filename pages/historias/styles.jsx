import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },
    div_top: {
        position: 'absolute',
        top: 30,
        left: 20,
        backgroundColor: '#FFF',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        position: 'absolute',
        top: '10%', // Ajusta a posição do título
    },
    title: {
        fontFamily: "Chicle",
        color: "#fff",
        fontSize: 70,
        textAlign: 'center',
    },
    btn: {
        flexDirection: 'column', // Coloca os botões na vertical
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '90%', // Largura dos botões
    },
    btn_text: {
        color: '#FFF',
        fontSize: 35,
        fontFamily: "Chicle",
        textAlign: 'center',
        marginBottom: 20, // Espaço entre o texto e o botão
    },
    btnHist: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%', // Ajusta conforme necessário
        height: 200,  // Altura suficiente para exibir a imagem
    },
    imghist1: {
        width: '100%', // Adapte ao tamanho do Pressable
        height: '100%',
        resizeMode: 'contain', // Garante que a imagem fique proporcional
    },
});

export default styles;
