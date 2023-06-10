import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import appStyles from '../../styles';
import {icons} from '../../constants';
import styles from './Button.styles';
import {Icon} from '..';

interface IButton {
  onClick: () => void;
  name: string;
  isHighlighted?: boolean;
}

const Button = ({onClick, name, isHighlighted}: IButton) => {
  return (
    <TouchableOpacity
      style={
        isHighlighted
          ? {...appStyles.wrapperColor, ...styles.button}
          : {...appStyles.wrapperFill, ...styles.button}
      }
      onPress={onClick}>
      <Text style={styles.buttonText}>{name}</Text>
      <Icon source={icons.arrowRight} />
    </TouchableOpacity>
  );
};

export default Button;
