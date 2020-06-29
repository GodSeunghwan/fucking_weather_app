import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ['#334d50', '#cbcaa5'],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ['#485563', '#29323c'],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ['#485563', '#29323c'],
        title: "Raining like a MF",
        subtitle: "For more info look outside"

    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ['#00416a', '#e4e5e6'],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Mist: {
        iconName: "weather-hazy",
        gradient: ['#abbaab', '#ffffff'],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Smoke: {
        iconName: "weather-hazy",
        gradient: ['#649173', '#dbd5a4'],
        title: "Smoke",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ['#654ea3', '#eaafc8'],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ['#abbaab', '#ffffff'],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ['#b993d6', '#8ca6db'],
        title: "Fog",
        subtitle: "I can't see.👀"
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ['#70e1f5', '#ffd194'],
        title: "Sand",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ['#606c88', '#3f4c6b'],
        title: "Ash",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ['#8360c3', '#2ebf91'],
        title: "Squall",
        subtitle: "Bullshit Squall..."
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ['#aa4b6b', ' #6b6b83', '#3b8d99'],
        title: "Tornado",
        subtitle: "You'll die if you go out now. lol"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ['#2980b9', '#6dd5fa', '#ffffff'],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#83a4d4', '#b6fbff'],
        title: "Clouds",
        subtitle: "I know, fucking boring"
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
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subtitle}</Text>
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
        flex: 1
    },
    halfContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 40
    },
    temp: {
        color: "white",
        fontSize: 48
    },
    title: {
        color: "white",
        fontSize: 34,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",
        textAlign: "left"
    }
});