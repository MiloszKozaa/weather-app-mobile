import {View, Text} from 'react-native';
import React from 'react';
import appStyles from '../../../../styles';
import styles from './WeatherCard.styles';
import Lottie from 'lottie-react-native';
import {animations} from '../../../../constants';
import {ICurrentWeather} from '../../../../models/weather/current';
import {DayShrotName} from '../../../../models/date/day';
import {monthShortNames} from '../../../../models/date/month';

interface WeatherCard {
  currentWeather: ICurrentWeather;
}

const WeatherCard = ({currentWeather}: WeatherCard) => {
  const date = new Date(currentWeather.date);

  return (
    <View style={appStyles.wrapperColor}>
      <View style={styles.wrapper}>
        <View style={styles.details}>
          <View>
            <Text style={styles.temperature}>{currentWeather.temp}°C</Text>
            <Text style={styles.description}>{currentWeather.description}</Text>
          </View>
          <View>
            <Text style={styles.date}>
              {DayShrotName[date.getUTCDay()]} {date.getUTCDate()}{' '}
              {monthShortNames[date.getUTCMonth()]}
            </Text>
            <Text style={styles.date}>
              {date.getUTCHours()}:
              {date.getUTCMinutes() < 10
                ? `0${date.getUTCMinutes()}`
                : date.getUTCMinutes()}
            </Text>
          </View>
        </View>
        <Lottie
          style={styles.animation}
          source={animations.dayPartlyCloudy}
          autoPlay
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default WeatherCard;
