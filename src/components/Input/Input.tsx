import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputSubmitEditingEventData,
} from 'react-native';
import React from 'react';
import styles from './Input.styles';
import appStyles from '../../styles';
import Icon from '../Icon/Icon';
import {icons} from '../../constants';

interface IInput {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onClick: () => void;
  autoFocus?: boolean;
}

const Input = ({value, onChange, onClick, autoFocus}: IInput) => {
  return (
    <View style={{...appStyles.wrapperBorder, ...styles.wrapper}}>
      <TextInput
        value={value}
        onChange={onChange}
        style={styles.input}
        autoFocus={autoFocus}
        inputMode="text"
        onSubmitEditing={onClick}
      />
      <Icon source={icons.search} onClick={onClick} />
    </View>
  );
};

export default Input;
