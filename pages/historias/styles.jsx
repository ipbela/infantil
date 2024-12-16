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
        top: 60,  
        left: 20, 
        backgroundColor: '#A2A8AC',
        width: 50, 
        height: 50, 
        borderRadius: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    back: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        position: 'absolute',
    },
    title: {
        fontFamily: "Chicle",
        color: "#fff",
        fontSize: 70,
        textAlign: 'center',
        marginTop: '-170%',
        left: '10%'
    },
    btn: {
        flexDirection: 'row', // Faz as caixas ficarem lado a lado
        flexWrap: 'wrap', // Permite que as caixas quebrem para a próxima linha
        justifyContent: 'center', // Centraliza as caixas no eixo horizontal
        alignItems: 'center', // Alinha as caixas no eixo vertical
        position: 'absolute',
        width: '90%', // Defina a largura total da grade
        height: '40%', // Ajuste a altura da grade conforme necessário
    },
    btn_text: {
        color: '#FFF',
        fontSize: 35,
        fontFamily: "Chicle",
        textAlign: 'center',
        marginTop: "-20%"
    },
    imghist1: {
        marginTop: '20%',
        width: '80%'
    }
});

export default styles;
