import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#7AC0E4',
    },
    container: {
        flex: 1,
        backgroundColor: '#7AC0E4',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    quadWhite: {
        width: width,
        height: height * 0.4,
        backgroundColor: "#FFF",
        borderBottomLeftRadius: width * 0.5,
        borderBottomRightRadius: width * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
    },
    logo: {
        width: '40%', // Ajustado para dispositivos maiores
        height: '40%',
        resizeMode: 'contain',
    },
    opcoes: {
        marginTop: height * 0.5, // Garantir espaço adequado para telas maiores
        width: '85%',
        alignItems: 'center',
    },
    btn_opcao: {
        width: '100%',
        height: height * 0.1, // Reduzido para não ocupar muito espaço
        padding: 15,
        backgroundColor: '#FFFF00',
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: height * 0.02, // Reduzido o espaçamento entre os botões
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    btn_text: {
        color: '#000',
        fontSize: width * 0.06, // Ajuste para telas maiores
        fontFamily: "Chicle",
        marginLeft: width * 0.02,
    },
    icon: {
        width: width * 0.08, // Proporcional à tela
        height: width * 0.08,
        resizeMode: 'contain',
    }
});

export default styles;
