import {useEffect, useState} from 'react';
import { postApi } from '../services';

export const useFetch = <IData>(endpoint: string, body: any) => {
  const [data, setData] = useState<IData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    setIsLoading(true);

    const response = await postApi(endpoint, body)

    if (response.status < 200 && response.status >= 300) {
      setError(response.error);
      setIsLoading(false);
      return;
    }

    setData(response.data as IData);
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
