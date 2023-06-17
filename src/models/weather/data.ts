import {ICity} from './city';
import {ICurrentWeather} from './current';
import {IForecast} from './forecast';

export interface IWeatherData {
  city: ICity;
  current: ICurrentWeather;
  forecast: IForecast[];
}
