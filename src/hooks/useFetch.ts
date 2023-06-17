import {useEffect, useState} from 'react';
import {IResponse} from '../models/api/response';

export const useFetch = <IData>(endpoint: string, body: any) => {
  const [data, setData] = useState<IData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>('');

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'include' as RequestCredentials_,
  };

  const fetchData = async () => {
    setIsLoading(true);

    const response = await fetch(
      `https://weather-app-mobile-server.vercel.app/${endpoint}`,
      options,
    );

    const dataResponse: IResponse<IData> = await response.json();
    if (dataResponse.status < 200 && dataResponse.status >= 300) {
      setError(dataResponse.error);
      setIsLoading(false);
      return;
    }

    setData(dataResponse.data as IData);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {data, isLoading, error, refetch};
};
