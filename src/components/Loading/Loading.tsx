import {View, Text} from 'react-native';
import React from 'react';
import appStyles from '../../styles';
import {COLORS, SIZES} from '../../constants';
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
      }}
    />
  );
};

export default Loading;
