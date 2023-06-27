import {View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TextInputSubmitEditingEventData} from 'react-native';
import React from 'react';
import styles from './Input.styles';
import appStyles from '../../styles';
import Icon from '../Icon/Icon';
import {icons} from '../../constants';

interface IInput {
//   value: string;
// //   onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
//   onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onClick: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
}

const Input = ({onClick}: IInput) => {
  return (
    <View style={{...appStyles.wrapperBorder, ...styles.wrapper}}>
      <TextInput
        style={styles.input}
        autoFocus
        inputMode="text"
        onSubmitEditing={onClick}
      />
      <Icon source={icons.search} />
    </View>
  );
};

export default Input;
