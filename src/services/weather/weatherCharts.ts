import {COLORS, icons} from '../../constants';
import {ISelectableChart} from '../../models/chart/selectableChart';

export const selectableWeatherCharts: ISelectableChart[] = [
  {
    type: 'temp',
    unit: '°C',
    icon: icons.thermometer,
    color: COLORS.temp,
  },
  {
    type: 'rainPropability',
    unit: '%',
    icon: icons.rain,
    color: COLORS.rain,
    chartSize: {
      min: 0,
      max: 80,
    },
  },
  {
    type: 'windSpeed',
    unit: 'km/h',
    icon: icons.wind,
    color: COLORS.wind,
  },
  {
    type: 'pressure',
    unit: 'hPa',
    icon: icons.pressure,
    color: COLORS.pressure,
    chartSize: {
      min: 990,
      max: 1030,
    },
  },
];
