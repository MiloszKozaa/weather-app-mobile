import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {ISearchCity} from '../../models/city/city';
import appStyles from '../../styles';
import {Button, Header, Icon, Input, Navbar} from '../../components';
import {icons} from '../../constants';
import styles from './Search.styles';
import {ICoord} from '../../models/city/coord';
import {postApi} from '../../services';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';

interface ISearchFetch {
  cities: ISearchCity[];
}

type Props = NativeStackScreenProps<RootStackParams, 'Search'>;

const Search = ({navigation}: Props) => {
  const [cities, setCities] = useState<ISearchCity[]>([]);
  const [cityName, setCityName] = useState('');

  const goToHome = (coord: ICoord) => {
    navigation.navigate('Home', coord);
  };

  const searchCities = async () => {
    const response = await postApi<ISearchCity[]>('api/search', {
      name: cityName,
    });

    setCities(response.data as ISearchCity[]);
  };

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
          main="Search"
          description="Type city name to check the weater and plan your next day"
        />
        <Input
          value={cityName}
          onChange={e => setCityName(e.nativeEvent.text)}
          onClick={searchCities}
          autoFocus
        />

        {cities.map((city, key) => (
          <Button
            key={key}
            name={`${city.name}, ${city.country}`}
            onClick={() => goToHome(city.coord)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Search;
