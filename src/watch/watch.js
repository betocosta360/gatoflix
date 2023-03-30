import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useNavigation } from '@react-navigation/native';
import styles from './style'



export default function WatchScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { videoUrl } = route.params;
    const [status, setStatus] = React.useState({});

    function setOrientation() {
        if (Dimensions.get('window').height > Dimensions.get('window').width) {
            //Device is in portrait mode, rotate to landscape mode.
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        }
        else {
            //Device is in landscape mode, rotate to portrait mode.
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
    }

    return (
        <View style={styles.container}>
            <Video
                source={{ uri: videoUrl }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                useNativeControls
                isLooping
                onFullscreenUpdate={setOrientation}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                style={{ width: Dimensions.get('window').width, height: 200 }}
            //style={styles.video}
            />

            <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

