import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradientBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imageBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    div_top: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: '#FFF',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 35,
        fontFamily: "Chicle",
        textAlign: 'center',
    },
    contText2: {
        width: '85%',
        height: '23%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Fundo translúcido
        borderRadius: 20,
        marginTop: '5%',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    contText3: {
        width: '85%',
        height: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Fundo translúcido
        borderRadius: 20,
        marginTop: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    bodyText4: {
        color: '#0E7386',
        fontWeight: '900',
        fontSize: 15,
    },
    bodyText5: {
        color: '#0E7386',
        fontWeight: '900',
        fontSize: 15,
        marginTop: 5,
    },
    imgs: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        resizeMode: 'contain', // Garantindo que a imagem seja ajustada corretamente
    },
    imageContainer: {
        width: '80%', // Largura ajustada para 80% da tela
        height: 120, // Altura ajustada
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        marginTop: 10, // Ajuste no espaçamento
    },
    imgCorreto: {
        width: '40%',
        height: '32%',
    },
    textCorreto: {
        color: '#0E7386',
        fontWeight: '600',
        fontSize: 55,
        marginTop: 5,
        textAlign: 'center'
    },
    btn_opcao: {
        width: '80%',
        height: 80,
        padding: 15,
        backgroundColor: '#FFFF00',
        borderRadius: 100,
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'center',
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.3,
        shadowRadius: 10,
        // Shadow for Android
        elevation: 10,
        marginTop: 20
    },
    btn_text: {
        color: '#000',
        fontSize: 38,
        fontFamily: "Chicle",
    },
    video: {
        width: '90%', // O vídeo ocupa 90% da largura da tela
        height: 250, // Altura ajustada para um tamanho maior
        borderRadius: 15, // Borda arredondada para suavizar o container
        overflow: 'hidden', // Garante que o vídeo não ultrapasse as bordas
        alignItems: 'center', // Centraliza o conteúdo no eixo horizontal
        justifyContent: 'center', // Centraliza no eixo vertical
        marginVertical: 20, // Adiciona margem para separar dos elementos acima e abaixo
    },
    contText: {
        width: '85%',
        height: '45%',
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        opacity: 0.6
    },
    bodyText: {
        color: '#0E7386',
        opacity: 1,
        fontWeight: '700',
        fontSize: 15
    },
    bodyText2: {
        color: '#0E7386',
        opacity: 1,
        fontWeight: '700',
        fontSize: 15,
        marginTop: 20
    },
    bodyText3: {
        color: '#0E7386',
        opacity: 1,
        fontWeight: '700',
        fontSize: 15,
        marginTop: 20
    },
});

export default styles;
