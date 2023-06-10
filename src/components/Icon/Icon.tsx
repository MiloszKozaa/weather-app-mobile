import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Icon.styles';

interface IIcon {
  source: number;
  onClick?: () => void;
}

const Icon = ({source, onClick}: IIcon) => {
  return onClick ? (
    <TouchableOpacity style={styles.icon} onPress={onClick}>
      <Image source={source} resizeMode="contain" style={styles.icon} />
    </TouchableOpacity>
  ) : (
    <Image source={source} resizeMode="contain" style={styles.icon} />
  );
};

export default Icon;
