import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },    
    solidBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#7AC0E4',
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
    texto_menu: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
    },
    opcoes: {
        width: '80%',
        alignItems: 'center',
        marginTop: '20%',
    },
    btn_opcao: {
        width: '100%',
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
    },
    btn_text: {
        color: '#000',
        fontSize: 48,
        fontFamily: "Chicle",
        marginLeft: 20, 
    },
    icon: {
        width: 30, 
        height: 30,  
        resizeMode: 'contain', 
    },
    quadWhite: {
        width: '100%',
        height: "40%",
        marginTop: "-20%",
        backgroundColor: "#FFF",
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
    },
    logo: {
        marginLeft: '16%',
        marginTop: '20%',
        width: '70%', 
        height: '70%', 
        resizeMode: 'contain', 
    }
});

export default styles;
