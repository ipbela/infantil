import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Pega a largura total da tela

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#7AC0E4",
        paddingHorizontal: 10, // Adiciona um leve padding lateral
    },
    div_top: {
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#A2A8AC',
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // Distribui os cards de forma uniforme
        maxWidth: width - 20, // Ajusta a largura para usar quase toda a tela
        marginTop: 30
    },
    card: {
        width: (width - 60) / 3, // Divide a largura em 3 cards por linha
        height: (width - 60) / 3, // Mantém os cards quadrados
        margin: 5, // Espaçamento menor entre os cards
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden', // Evita que a imagem de fundo saia do card
        backgroundColor: '#FFFFFF', // Cor de fundo como fallback
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    matched: {
        opacity: 0.5,
    },
    round: {
        color: '#FFF',
        fontSize: 48,
        fontFamily: "Chicle",
        marginLeft: 20, 
        marginTop: 50
    },
    nextContainer: {
        marginTop: 20
    },
    text: {
        color: '#7AC0E4',
        fontSize: 80,
        fontFamily: "Chicle",
        top: '25%',
        textAlign: 'center'
    },
    contRound: {
        backgroundColor: '#D5E6EB',
        height: '100%'
    },
    imgDente: {
        width: 300,
        height: 300,
        top: '30%',
        left: '13%'
    }
});

export default styles;
