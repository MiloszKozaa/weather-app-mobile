import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {animations} from '../../constants';
import styles from './Start.styles';
import {Button} from '../../components';

const Start = ({navigation}: any) => {
  const onButtonClick = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.screen}>
      <Lottie
        style={styles.backgroundScreen}
        source={animations.startBackground}
        autoPlay
        resizeMode="cover"
      />
      <View style={styles.header}>
        <Text style={styles.appName}>Weather App</Text>
        <Text style={styles.description}>
          The most pleasant way to plan your next day
        </Text>
      </View>
      <Button name="Get Started" onClick={onButtonClick} isHighlighted />
    </View>
  );
};

export default Start;
