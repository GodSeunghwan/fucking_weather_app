import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";

export default function Weather({ temp }) {
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
            <StatusBar />
        </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});