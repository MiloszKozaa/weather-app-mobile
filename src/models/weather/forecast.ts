import {ICurrentWeather} from './current';

export interface IForecast {
  day: number;
  dateNumber: number;
  hourly: ICurrentWeather[];
}
