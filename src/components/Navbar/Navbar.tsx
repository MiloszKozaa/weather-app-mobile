import {View, Text} from 'react-native';
import React from 'react';
import styles from './Navbar.styles';
import {Icon} from '..';

interface INavbar {
  left?: React.ReactElement;
  right?: React.ReactElement;
  text?: string;
}

const Navbar = ({left, text, right}: INavbar) => {
  return (
    <View style={styles.wrapper}>
      <View>
        {left}
      </View>
      <Text style={styles.text}>{text}</Text>
      <View>
        {right}
      </View>
    </View>
  );
};

export default Navbar;
