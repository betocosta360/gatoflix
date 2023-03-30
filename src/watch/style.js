import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#120420',
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        justifyContent: 'space-between',
        margin: 10,
        width: 150,
        height: 50,
    },
    button: {
        flex: 1,
        width: 40,
        height: 50,
        backgroundColor: '#fd2e44',
        borderRadius: 5,
        padding: 7,
        margin: 7,
        borderWidth: 1,
        borderColor: '#fd2e44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Inter_700Bold',
        color: 'white'
    }
});

export default styles
