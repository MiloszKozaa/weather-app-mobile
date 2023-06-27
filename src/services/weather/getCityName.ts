import {ICity} from '../../models/city/city';

export const getCityName = (city: ICity) => {
  const cityName =
    city.name || `${city.coord.lat.toFixed(3)}, ${city.coord.lon.toFixed(3)}`;

  return cityName;
};
