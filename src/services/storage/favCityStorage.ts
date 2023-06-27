import AsyncStorage from '@react-native-async-storage/async-storage';
import {ICity} from '../../models/city/city';
import {StorageKeys} from '../../constants';

export const getFavCities = async () => {
  const result = await AsyncStorage.getItem(StorageKeys.FAVOURITES);

  const data = result ? JSON.parse(result) : {favourites: []};

  return (await data.favourites) as ICity[];
};

export const setFavCity = async (city: ICity) => {
  let favCities: ICity[] = await getFavCities();

  const favCityAlreadyExist = await favCities.find(({id}) => id === city.id);

  if (favCityAlreadyExist) {
    console.warn('City have already added!');
    return;
  }

  await favCities.push(city);

  const jsonValue = await JSON.stringify({favourites: favCities});

  await AsyncStorage.setItem(StorageKeys.FAVOURITES, jsonValue);
};

export const removeFavCity = async (city: ICity) => {
  const favCities: ICity[] = await getFavCities();

  const data = await favCities.filter(({id}) => id !== city.id);

  const jsonValue = await JSON.stringify({favourites: data});

  await AsyncStorage.mergeItem(StorageKeys.FAVOURITES, jsonValue);
};
