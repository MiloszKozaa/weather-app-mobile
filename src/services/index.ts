import {getBarHeight} from './chart/getBarHeight';
import {getBarWidth} from './chart/getBarWidth';
import {selectableWeatherCharts} from './weather/weatherCharts';
import {
  getFavCities,
  removeFavCity,
  setFavCity,
} from './storage/favCityStorage';
import {getItem, setItem, removeItem} from './storage/storage';
import {getLocation} from './location/getLocation';
import { postApi } from './api/callApi';
import { getIconByName } from './icons/getIconByName';

export {
  getBarWidth,
  getBarHeight,
  selectableWeatherCharts,
  getFavCities,
  removeFavCity,
  setFavCity,
  getItem,
  setItem,
  removeItem,
  getLocation,
  postApi,
  getIconByName
};
