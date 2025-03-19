import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://markts.com.br/wp-content/uploads/2024/09/Logo.png' }} 
                style={styles.logo} 
                resizeMode="contain"
            />
            <Text style={styles.title}>Markts Buy Todo App</Text>
            <Text style={styles.subtitle}>Credits</Text>
            <Text style={styles.text}>Developed by Lucas Thomaz</Text>
            <Text style={styles.subtitle}>Technologies Used</Text>
            <Text style={styles.text}>- React Native</Text>
            <Text style={styles.text}>- TypeScript</Text>
            <Text style={styles.text}>- Expo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default AboutScreen;