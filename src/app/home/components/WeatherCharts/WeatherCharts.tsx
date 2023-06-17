import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './WeatherCharts.styles';
import {Icon, Chart, Loading} from '../../../../components';
import {COLORS} from '../../../../constants';
import {IChart} from '../../../../models/chart/chart';
import {selectableWeatherCharts} from '../../../../services';
import {ISelectableChart} from '../../../../models/chart/selectableChart';
import {IForecast} from '../../../../models/weather/forecast';

interface IWeatherCharts {
  forecast: IForecast[];
  date: number;
}

const WeatherCharts = ({forecast, date}: IWeatherCharts) => {
  const [displayedType, setDisplayedType] = useState<string>('temp');
  const [dateNumber, setDateNumber] = useState(date);

  const displayedChart =
    selectableWeatherCharts.find(({type}) => type === displayedType) ??
    selectableWeatherCharts[0];

  useEffect(() => {
    setDateNumber(date);
  }, [date]);

  const displayedForecastDay =
    forecast.find(forecast => forecast.dateNumber === date) ?? forecast[0];

  const hourlyForecastDataChart = displayedForecastDay.hourly.map(hour => {
    return {
      value: hour[displayedType as keyof typeof hour] as number,
      label: new Date(hour.date).getUTCHours().toString(),
    };
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.unit}>{displayedChart.unit}</Text>
        <View style={styles.buttonsWrapper}>
          {selectableWeatherCharts.map(({icon, type, color}, key) => (
            <Icon
              key={key}
              source={icon}
              onClick={() => setDisplayedType(type)}
              customStyle={{
                ...styles.button,
                backgroundColor:
                  displayedType === type ? color : COLORS.background,
              }}
            />
          ))}
        </View>
      </View>

      <View style={styles.chartWrapper}>
        <Chart
          data={hourlyForecastDataChart}
          chartColor={displayedChart.color}
          chartSize={displayedChart.chartSize}
        />
      </View>
    </View>
  );
};

export default WeatherCharts;
