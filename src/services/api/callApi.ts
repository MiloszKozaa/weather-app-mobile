import {IResponse} from '../../models/api/response';

export const postApi = async <IData>(endpoint: string, body: any) => {
  const response = await fetch(
    `https://weather-app-mobile-server.vercel.app/${endpoint}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include' as RequestCredentials_,
    },
  );

  const data = await response.json();

  return data as IResponse<IData>;
};
