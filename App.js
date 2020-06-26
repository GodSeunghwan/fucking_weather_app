import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";
import * as Location from "expo-location";

export default class App extends React.Component {
  getPosition = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }

  componentDidMount() {
    this.getPosition();
  }

  render() {
    return (
      <Loading />
    );
  }
}