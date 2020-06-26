import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getPosition = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
      // Send to API and get Weather
    } catch (error) {
      Alert.alert("이 앱이 사용자의 위치를 찾을 수 없습니다.", "설정 > Expo > 위치 > 위치 정보 허용");
    }
  }

  componentDidMount() {
    this.getPosition();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}