import {useEffect, useState} from 'react';
import {ICity} from '../models/city/city';
import {getFavCities, removeFavCity, setFavCity} from '../services';
import {IWeatherData} from '../models/weather/data';

export const useFavCity = (data: IWeatherData | undefined) => {
  const [isFav, setIsFav] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const set = async (city: ICity) => {
    await setFavCity(city);
    await checkFavCity(city);
  };

  const remove = async (city: ICity) => {
    await removeFavCity(city);
    await checkFavCity(city);
  };

  const checkFavCity = async (city: ICity) => {
    const response = await getFavCities();

    const isFavourite = await response.find(({id}) => id === city.id);

    (await isFavourite)
      ? (setIsFav(true), setIsLoading(false))
      : (setIsFav(false), setIsLoading(false));
  };

  const onClick = (city: ICity) => {
    setIsLoading(true);
    !isLoading && isFav ? remove(city) : set(city);
  };

  useEffect(() => {
    setIsLoading(true);
    if (data) checkFavCity(data.city);
  }, [data]);

  return {isFav, isLoading, onClick, checkFavCity};
};
