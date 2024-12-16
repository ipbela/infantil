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
        marginTop: '-90%',
        width: '80%',
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
    btn_opcao: {
        width: '90%',
        height: 90,
        padding: 15,
        backgroundColor: '#FFFF00',
        borderRadius: 100,
        alignItems: 'center',
        marginBottom: 50,
        flexDirection: 'row', 
        justifyContent: 'center',
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.3,
        shadowRadius: 10,
        // Shadow for Android
        elevation: 10,
        marginTop: '80%'
    },
    btn_text: {
        color: '#000',
        fontSize: 48,
        fontFamily: "Chicle",
        textAlign: 'center'
    },
});

export default styles;
