import {View, Text} from 'react-native';
import React from 'react';
import appStyles from '../../../../styles';
import styles from './CityCard.styles';
import Lottie from 'lottie-react-native';
import {animations} from '../../../../constants';

const CityCard = () => {
  return (
    <View style={appStyles.wrapperColor}>
      <View style={styles.wrapper}>
        <View style={styles.details}>
          <View>
            <Text style={styles.temperature}>20°C</Text>
            <Text style={styles.description}>Cloudy day</Text>
          </View>
          <View>
            <Text style={styles.date}>Wed 16 July</Text>
            <Text style={styles.date}>3:24 pm</Text>
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

export default CityCard;
