import {useEffect, useState} from 'react';
import {postApi} from '../services';
import {IResponse} from '../models/api/response';

export const useFetch = <IData>(endpoint: string, body: any) => {
  const [data, setData] = useState<IData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    setIsLoading(true);

    const response = (await postApi(endpoint, body)) as IResponse<IData>;
    console.log(await response);
    if (response.status === 'error') {
      setError(response.message);
      setIsLoading(false);
      return;
    }

    if (response.status === 'success') {
      setData(response.data as IData);
      setIsLoading(false);
      return;
    }
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
