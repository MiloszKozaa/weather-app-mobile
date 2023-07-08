import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {icons} from '../../constants';
import appStyles from '../../styles';
import {Icon, Loading, Navbar, NotFound} from '../../components';
import {WeatherCard, DaySelector, WeatherCharts} from './components';
import styles from './Home.style';
import {useFetch} from '../../hooks/useFetch';
import {IWeatherData} from '../../models/weather/data';
import {getCityName} from '../../services/weather/getCityName';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';
import {useFavCity} from '../../hooks/useFavCity';

type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

const Home = ({navigation, route}: Props) => {
  const {data, isLoading, error, refetch} = useFetch<IWeatherData>(
    'api',
    route.params,
  );

  const favCity = useFavCity(data);

  const [dayDisplayed, setDayDisplayed] = useState<number>(0);

  const heartIcon = !favCity.isLoading
    ? !favCity.isFav
      ? icons.heart
      : icons.heartFill
    : icons.heartLoading;

  const goToFavourites = () => {
    navigation.navigate('Favourites');
  };

  useEffect(() => {
    refetch();
  }, [route.params]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setDayDisplayed(data.forecast[0].dateNumber);
    }
  }, [data]);

  return (
    <View style={appStyles.screen}>
      <Navbar
        text={!isLoading && data ? getCityName(data.city) : ''}
        left={<Icon source={icons.menu} onClick={goToFavourites} />}
        right={
          <Icon
            source={heartIcon}
            onClick={() => data && favCity.onClick(data.city)}
          />
        }
      />
      {error && !data && !isLoading ? (
        <View style={styles.errorWrapper}>
          <NotFound />
        </View>
      ) : (
        <View style={styles.wrapper}>
          <View style={styles.currentWeather}>
            {!isLoading && data ? (
              <WeatherCard currentWeather={data.current} />
            ) : (
              <Loading />
            )}
          </View>
          {!isLoading && data ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContent}
              style={styles.daySelector}>
              {data.forecast.map(({day, dateNumber}, key) => (
                <DaySelector
                  key={key}
                  day={day}
                  dateNumber={dateNumber}
                  onClick={() => setDayDisplayed(dateNumber)}
                  isFocused={dayDisplayed === dateNumber}
                />
              ))}
            </ScrollView>
          ) : (
            <Loading customStyle={styles.daySelectorLoading} />
          )}
          <View style={styles.weatherChart}>
            {!isLoading && data ? (
              <WeatherCharts forecast={data.forecast} date={dayDisplayed} />
            ) : (
              <Loading />
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;
