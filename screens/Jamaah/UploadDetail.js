import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native'; // Import Dimensions dari react-native
import { useRoute } from '@react-navigation/native';

export default function UploadDetail() {
    const route = useRoute();
    const imageUri = route.params.imageUri;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageUri }}
                style={styles.image}
            />
        </View>
    );
}

const { width } = Dimensions.get('window'); // Dapatkan lebar layar perangkat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: width * 0.9,
        aspectRatio: 1,
        borderRadius: 10,
    },
});
