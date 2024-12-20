import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, FlatList, Dimensions } from 'react-native';

export default function StartingScreen({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            navigation.replace('Home');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const sliderData = [
        { id: '1', title: 'Welcome to Sai Properties' },
        { id: '2', title: 'Find Your Perfect Home' },
        { id: '3', title: 'Contact Our Experts Today' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Text style={styles.slideText}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }}
                style={styles.logo}
            />
            <Text style={styles.appName}>Sai Properties</Text>

            {isLoading ? (
                <>
                    {/* <FlatList
                        data={sliderData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        style={styles.carousel}
                    /> */}
                    <ActivityIndicator size="large" color="#333" style={styles.loader} />
                </>
            ) : (
                <Text style={styles.loadingText}>Welcome! Navigating to Home...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    slide: {
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    slideText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    loader: {
        marginTop: 20,
    },
    loadingText: {
        fontSize: 16,
        color: '#333',
    },
    carousel: {
        marginBottom: 20,
    },
});
