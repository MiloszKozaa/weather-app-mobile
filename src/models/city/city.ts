import {ICoord} from './coord';

export interface ICity {
  id: number;
  name: string;
  coord: ICoord;
  country: string;
  timezone: number;
}

export interface ISearchCity {
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  state: string;
}
