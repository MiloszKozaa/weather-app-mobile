import {View, Text} from 'react-native';
import React from 'react';
import styles from './Chart.styles';
import {getBarHeight, getBarWidth} from '../../services';

interface IChart {
  data: {
    value: number;
    label: string;
  }[];
  chartColor: string;
  chartSize?: {
    min: number;
    max: number;
  };
}

const Chart = ({data, chartColor, chartSize}: IChart) => {
  const maxValue = Math.max(...data.map(({value}) => value));
  const minValue = Math.min(...data.map(({value}) => value));

  const maxChartSize = chartSize
    ? maxValue > chartSize.max
      ? maxValue
      : chartSize.max
    : maxValue;
  const minChartSize = chartSize
    ? minValue < chartSize.min
      ? minValue
      : chartSize.min
    : minValue;

  const wrapperStyle =
    data[0].label === '0'
      ? styles.wrapper
      : {...styles.wrapper, ...styles.flexEnd};

  const setBarStyle = (value: number) => {
    return {
      ...styles.bar,
      height: `${getBarHeight(minChartSize, maxChartSize, value) - 10}%`,
      backgroundColor: chartColor,
    };
  };

  return (
    <View style={wrapperStyle}>
      {data.map(({value, label}, key) => (
        <View key={key} style={styles.barWrapper}>
          <View style={setBarStyle(value)}>
            <Text style={value < 100 ? styles.value : styles.largeValue}>
              {value}
            </Text>
          </View>
          <Text style={styles.label}>{label}</Text>
        </View>
      ))}
    </View>
  );
};

export default Chart;
