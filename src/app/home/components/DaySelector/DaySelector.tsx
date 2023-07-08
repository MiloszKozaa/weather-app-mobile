import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import appStyles from '../../../../styles';
import styles from './DaySelector.styles';
import {COLORS} from '../../../../constants';
import {DayShrotName} from '../../../../models/date/day';

interface IDaySelector {
  day: number;
  dateNumber: number;
  onClick: () => void;
  isFocused: boolean;
}

const DaySelector = ({isFocused, day, dateNumber, onClick}: IDaySelector) => {
  const backgroundStyle = isFocused
    ? appStyles.wrapperColor
    : appStyles.wrapperFill;
  const textColor = {color: COLORS.white};

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onClick}>
      <View style={backgroundStyle}>
        <View style={styles.innerWrapper}>
          <Text style={{...styles.name, ...textColor}}>
            {DayShrotName[day]}
          </Text>
          <Text style={{...styles.number, ...textColor}}>{dateNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DaySelector;
