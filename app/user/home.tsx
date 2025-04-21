import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');
const NUM_CIRCLES = 20;
const AMPLITUDE = 100; // Max left-right sway
const WAVELENGTH = 25; // Controls how often it sways
const START_Y = 100; // Where the wave begins vertically
const GAP_Y = 60; // Vertical gap between circles



const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: START_Y + GAP_Y * NUM_CIRCLES + 50,
        backgroundColor: '#1E1E1E',

    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
    },
});

const home = () => {
    const circles = Array.from({ length: NUM_CIRCLES }, (_, i) => {
        const y = START_Y + i * GAP_Y;
        const x = width / 2 + AMPLITUDE * Math.sin(i * Math.PI / (WAVELENGTH / 2));

        return { x, y };
    });
    return (
        <ScrollView>
            <View style={styles.container}>
                {circles.map((pos, index) => (
                    <Link href={"/user/add"} style={[styles.circle, {
                        position: 'absolute',
                        left: pos.x - 10, // center the circle
                        top: pos.y - 10,
                    },]} key={index} asChild>
                        <TouchableOpacity />
                    </Link>
                ))}
            </View>
        </ScrollView>

    )
}



export default home