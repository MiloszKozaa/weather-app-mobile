import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {animations} from '../../constants';
import styles from './NotFound.styles';

const NotFound = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>SORRY</Text>
      <Lottie style={styles.animation} source={animations.notFound} autoPlay />
      <Text style={styles.describe}>We have some troubles</Text>
      <Text style={styles.hint}>Try again later</Text>
    </View>
  );
};

export default NotFound;
