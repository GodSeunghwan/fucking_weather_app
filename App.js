import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading";
import Weather from './Weather';
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "2e1b6dd61601283b14b84b32419b87bc";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(data);
    this.setState({ isLoading: false, temp: data.main.temp });
  }

  getPosition = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      await this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("이 앱이 사용자의 위치를 찾을 수 없습니다.", "설정 > Expo > 위치 > 위치 정보 허용");
    }
  }

  componentDidMount() {
    this.getPosition();
  }

  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}