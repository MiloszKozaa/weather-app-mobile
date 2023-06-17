import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Icon.styles';

interface IIcon {
  source: number;
  onClick?: () => void;
  customStyle?: any;
}

const Icon = ({source, onClick, customStyle}: IIcon) => {
  return onClick ? (
    <TouchableOpacity style={customStyle} onPress={onClick}>
      <Image source={source} resizeMode="contain" style={styles.icon} />
    </TouchableOpacity>
  ) : (
    <Image source={source} resizeMode="contain" style={styles.icon} />
  );
};

export default Icon;
