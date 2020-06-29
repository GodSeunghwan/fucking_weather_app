import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ['#334d50', '#cbcaa5']
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ['#485563', '#29323c']
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ['#485563', '#29323c']
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ['#00416a', '#e4e5e6']
    },
    Mist: {
        iconName: "weather-hazy",
        gradient: ['#abbaab', '#ffffff']
    },
    Smoke: {
        iconName: "weather-hazy",
        gradient: ['#649173', '#dbd5a4']
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ['#654ea3', '#eaafc8']
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ['#abbaab', '#ffffff']
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ['#b993d6', '#8ca6db']
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ['#70e1f5', '#ffd194']
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ['#606c88', '#3f4c6b']
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ['#8360c3', '#2ebf91']
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ['#aa4b6b', ' #6b6b83', '#3b8d99']
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ['#2980b9', '#6dd5fa', '#ffffff']
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#83a4d4', '#b6fbff']
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={128} color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>Fucking Weather...</Text>
                <Text style={styles.subTitle}>SubTitle</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    halfContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    },
    temp: {
        color: "white",
        fontSize: 48
    },
    title: {
        color: "white",
        fontSize: 34,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600"
    }
});