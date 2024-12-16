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
        marginTop: '-175%',
    },
    boxs: {
        flexDirection: 'row', // Faz as caixas ficarem lado a lado
        flexWrap: 'wrap', // Permite que as caixas quebrem para a próxima linha
        justifyContent: 'center', // Centraliza as caixas no eixo horizontal
        alignItems: 'center', // Alinha as caixas no eixo vertical
        position: 'absolute',
        width: '90%', // Defina a largura total da grade
        height: '40%', // Ajuste a altura da grade conforme necessário
    },
    box: {
        width: '60%', // Cada caixa ocupa 60% da largura
        height: '60%', // Cada caixa ocupa 60% da altura disponível
    },
    imageBox1: {
        width: '110%',
        height: '110%',
        marginLeft: '-42%'
    },
    imageBox2: {
        width: '110%',
        height: '110%',
        marginLeft: '30%',
        marginTop: '-93%'
    },
    imageBox3: {
        width: '110%',
        height: '110%',
        marginLeft: '-42%',
        marginTop: '-85%'
    },
    imageBox4: {
        width: '110%',
        height: '110%',
        marginLeft: '30%',
        marginTop: '-180%'
    },
    contCantiga1: {
        flex: 1, 
        backgroundColor: '#6E8FE1', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    titleCantiga: {
    },
    subCantiga: {
        fontFamily: "Chicle",
        color: "#fff",
        fontSize: 60,
        textAlign: 'center',
    },
    star1: {
        position: 'absolute',
    },
    star2: {
        position: 'absolute',
        marginTop: '-10%',
        marginLeft: '20%'
    },
    star3: {
        position: 'absolute',
        marginTop: '-5%',
        marginLeft: '-20%'
    },
    star4: {
        position: 'absolute',
        marginTop: '-3%',
        marginLeft: '32%'
    },
    star5: {
        position: 'absolute',
        marginLeft: '40%'
    },
    videoContainer: {
        width: '90%', // O vídeo ocupa 90% da largura da tela
        height: 500, // Altura ajustada para um tamanho maior
        borderRadius: 15, // Borda arredondada para suavizar o container
        overflow: 'hidden', // Garante que o vídeo não ultrapasse as bordas
        alignItems: 'center', // Centraliza o conteúdo no eixo horizontal
        justifyContent: 'center', // Centraliza no eixo vertical
        marginVertical: 20, // Adiciona margem para separar dos elementos acima e abaixo
        marginTop: '20%'
    },
    video: {
        width: '100%', // O vídeo ocupa toda a largura do container
        height: '100%', // O vídeo ocupa toda a altura do container
    },
    
});

export default styles;
