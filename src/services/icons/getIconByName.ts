import {animations, icons} from '../../constants';
import {IGetIconByName} from '../../models/icons/getIconByName';

export const getIconByName: IGetIconByName[] = [
  {
    icon: animations.clearSkyDay,
    names: ['01d'],
  },
  {
    icon: animations.clearSkyNight,
    names: ['01n'],
  },
  {
    icon: animations.fewCloudsDay,
    names: ['02d'],
  },
  {
    icon: animations.fewCloudsNight,
    names: ['02n'],
  },
  {
    icon: animations.scatteredClouds,
    names: ['03n', '03d'],
  },
  {
    icon: animations.brokenClouds,
    names: ['04n', '04d'],
  },
  {
    icon: animations.rainDay,
    names: ['09d', '10d'],
  },
  {
    icon: animations.rainNight,
    names: ['09n', '10n'],
  },
  {
    icon: animations.thunderstorm,
    names: ['11n', '11d'],
  },
  {
    icon: animations.snow,
    names: ['13n', '13d'],
  },
  {
    icon: animations.mist,
    names: ['50n', '50d'],
  },
];
