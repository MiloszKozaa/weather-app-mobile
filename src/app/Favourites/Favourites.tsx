import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import appStyles from '../../styles';
import {Button, Header, Icon, Navbar} from '../../components';
import {icons} from '../../constants';
import styles from './Favourites.styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';
import {ICoord} from '../../models/city/coord';
import {getFavCities} from '../../services';
import {ICity} from '../../models/city/city';

type Props = NativeStackScreenProps<RootStackParams, 'Favourites'>;

const Favourites = ({navigation}: Props) => {
  const [favCities, setFavCities] = useState<ICity[]>([]);

  const goToMap = () => {
    navigation.navigate('Search');
  };

  const goToHome = (coord: ICoord) => {
    navigation.navigate('Home', coord);
  };

  const setFavouritesCities = async () => setFavCities(await getFavCities());

  useEffect(() => {
    setFavouritesCities();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{...appStyles.screen, minHeight: '100%'}}>
      <Navbar
        right={
          <Icon source={icons.arrowLeft} onClick={() => navigation.goBack()} />
        }
      />
      <View style={styles.wrapper}>
        <Header
          main="Favourite"
          description="Select or search your favourite city to check the weather"
        />
        <Button name="Search a city" onClick={goToMap} isHighlighted />
        {favCities.map(({name, coord, id}, key) => (
          <Button key={key} name={name} onClick={() => goToHome(coord)} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Favourites;
