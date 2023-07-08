import {View, Text, Animated, Easing} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Lottie from 'lottie-react-native';
import appStyles from '../../styles';
import {COLORS, SIZES, animations} from '../../constants';
import loadingStyles from './Loading.styles';

interface ILoading {
  customStyle?: any;
}

const Loading = ({customStyle}: ILoading) => {
  return (
    <View
      style={{
        ...loadingStyles.loading,
        ...customStyle,
      }}>
      <Lottie
        // style={styles.animation}
        source={animations.loadingWrapper}
        autoPlay
        speed={0.7}
        resizeMode="cover"
      />
    </View>
  );
};

export default Loading;
