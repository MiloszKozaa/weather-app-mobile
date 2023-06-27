import {View, Text} from 'react-native';
import React from 'react';
import styles from './Header.styles';

interface IHeader {
  main: string;
  description: string;
}

const Header = ({main, description}: IHeader) => {
  return (
    <View style={styles.header}>
      <Text style={styles.main}>{main}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Header;
