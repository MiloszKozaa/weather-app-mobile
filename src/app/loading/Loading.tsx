import {View} from 'react-native';
import React, {useEffect} from 'react';
import appStyles from '../../styles';
import {getItem, getLocation} from '../../services';
import {ICoord} from '../../models/city/coord';
import {animations, defaultCity} from '../../constants';
import Lottie from 'lottie-react-native';

const Loading = ({navigation}: any) => {
  const navigator = async (coord: ICoord) => {
    const response = await getItem('@was-start-screen-displayed');

    response === 'yes'
      ? navigation.navigate('Home', coord)
      : navigation.navigate('Start', coord);
  };

  useEffect(() => {
    getLocation(
      ({latitude, longitude}) => navigator({lat: latitude, lon: longitude}),
      message => {
        console.warn(message);
        navigator(defaultCity.coord);
      },
    );
  }, []);

  return (
    <View style={{...appStyles.screen, height: '100%', justifyContent: 'center'}}>
      <Lottie
        style={{width: '80%'}}
        source={animations.weatherLoadingWind}
        autoPlay
        resizeMode="cover"
      />
    </View>
  );
};

export default Loading;
