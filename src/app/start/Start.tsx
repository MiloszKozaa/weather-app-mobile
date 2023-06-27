import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {StorageKeys, animations} from '../../constants';
import styles from './Start.styles';
import {Button} from '../../components';
import {setItem} from '../../services';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';

type Props = NativeStackScreenProps<RootStackParams, 'Start'>;

const Start = ({navigation, route}: Props) => {
  const onButtonClick = async () => {
    navigation.navigate('Home', route.params);
    await setItem(StorageKeys.WAS_DISPLAYED, 'yes');
  };

  return (
    <View style={styles.screen}>
      <Lottie
        style={styles.backgroundScreen}
        source={animations.startBackground}
        autoPlay
        loop
        resizeMode="cover"
      />
      <View style={styles.header}>
        <Text style={styles.appName}>Weather App</Text>
        <Text style={styles.description}>
          The most pleasant way to plan your next day
        </Text>
      </View>
      <View style={styles.button}>
        <Button name="Get Started" onClick={onButtonClick} isHighlighted />
      </View>
    </View>
  );
};

export default Start;
