import {View, ScrollView, Text} from 'react-native';
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
  const [error, setError] = useState('');

  const goToHome = (coord: ICoord) => {
    navigation.navigate('Home', coord);
  };

  const searchCities = async () => {
    const response = await postApi<ISearchCity[]>('api/search', {
      name: cityName,
    });
    if (response.status === 'success') {
      setCities(response.data as ISearchCity[]);
      setError('');
    }
    if (response.status === 'error') {
      setError(response.message);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{...appStyles.screen, minHeight: '100%'}}
      showsVerticalScrollIndicator={false}>
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

        {!error ? (
          cities.map((city, key) => (
            <Button
              key={key}
              name={`${city.name}, ${city.country}`}
              onClick={() => goToHome(city.coord)}
            />
          ))
        ) : (
          <Text>error</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Search;
