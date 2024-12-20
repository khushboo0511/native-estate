import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const About = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Title */}
            <Text style={styles.title}>About Sai Properties</Text>

            {/* Content */}
            <Text style={styles.paragraph}>
                Sai Properties is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. 
                Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
            </Text>

            <Text style={styles.paragraph}>
                Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. 
                Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
            </Text>

            <Text style={styles.paragraph}>
                Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. 
                We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f9fa',
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    paragraph: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        marginBottom: 15,
    },
});

export default About;
