import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6E8FE1',
    },
    gradientBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingBottom: 20,
    },
    div_top: {
        position: 'absolute',
        top: height * 0.05,
        left: width * 0.05,
        backgroundColor: '#FFF',
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: width * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    iconBack: {
        width: width * 0.05,
        height: height * 0.05,
        resizeMode: 'contain',
    },
    title: {
        fontFamily: "Chicle",
        color: "#fff",
        fontSize: width * 0.1,
        textAlign: 'center',
        marginTop: height * 0.2,
    },
    boxes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: height * 0.02,
        width: '100%',
    },
    box: {
        width: width * 0.45,
        height: width * 0.45,
        marginBottom: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBox: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    titleCantiga: {
        fontFamily: "Chicle",
        color: "#fff",
        fontSize: width * 0.09,
        textAlign: 'center',
        marginTop: height * 0.1,
    },
    videoContainer: {
        width: width * 0.9,
        height: height * 0.75,
        borderRadius: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.05,
        marginLeft: width * 0.05
    },
    video: {
        width: '95%',
        height: '100%',
    },
});

export default styles;
