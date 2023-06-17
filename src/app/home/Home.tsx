import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, icons} from '../../constants';
import appStyles from '../../styles';
import {Icon, Loading, Navbar} from '../../components';
import {WeatherCard, DaySelector, WeatherCharts} from './components';
import styles from './Home.style';
import {useFetch} from '../../hooks/useFetch';
import {IWeatherData} from '../../models/weather/data';
import {DayShrotName} from '../../models/date/day';
import {getCityName} from '../../services/weather/getCityName';

const Home = ({navigation}: any) => {
  const {data, isLoading, error, refetch} = useFetch<IWeatherData>('api', {
    lat: 32,
    lon: 108,
  });

  const [dayDisplayed, setDayDisplayed] = useState<number>(0);

  useEffect(() => {
    if (data) {
      setDayDisplayed(data.forecast[0].dateNumber);
    }
  }, [data]);

  return (
    <View style={appStyles.screen}>
      <Navbar
        text={data ? getCityName(data.city) : ''}
        left={
          <Icon
            source={icons.menu}
            onClick={() => navigation.navigate('Favourites')}
          />
        }
        right={<Icon source={icons.heart} />}
      />
      <View style={styles.wrapper}>
        <View style={styles.currentWeather}>
          {data ? <WeatherCard currentWeather={data.current} /> : <Loading />}
        </View>
        {data ? (
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
          {data ? (
            <WeatherCharts forecast={data.forecast} date={dayDisplayed} />
          ) : (
            <Loading />
          )}
        </View>
      </View>
    </View>
  );
};

export default Home;
