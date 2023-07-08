import {View} from 'react-native';
import React, {useEffect} from 'react';
import appStyles from '../../styles';
import {getFavCities, getItem, getLocation} from '../../services';
import {ICoord} from '../../models/city/coord';
import {animations, defaultCity} from '../../constants';
import Lottie from 'lottie-react-native';

const Loading = ({navigation}: any) => {
  const getDefaultCoordByFavCities = async () => {
    const response = await getFavCities();

    const coord = (await response) ? response[0].coord : defaultCity.coord;

    return coord;
  };

  const navigator = async (coord?: ICoord) => {
    const wasScreenDisplayed = await getItem('@was-start-screen-displayed');

    const defaultCoord = await getDefaultCoordByFavCities();

    wasScreenDisplayed === 'yes'
      ? coord
        ? navigation.navigate('Home', coord)
        : navigation.navigate('Home', defaultCoord)
      : navigation.navigate('Start', coord);

    // wasScreenDisplayed === 'yes'
    //   ? navigation.navigate('Home', coord)
    //   : navigation.navigate('Start', coord);
  };

  useEffect(() => {
    getLocation(
      ({latitude, longitude}) => navigator({lat: latitude, lon: longitude}),
      message => {
        // console.warn(message);
        navigator();
      },
    );
  }, []);

  return (
    <View
      style={{...appStyles.screen, height: '100%', justifyContent: 'center'}}>
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
