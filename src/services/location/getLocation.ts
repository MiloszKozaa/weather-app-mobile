import GetLocation, {Location} from 'react-native-get-location';

export const getLocation = (
  onSuccess: (location: Location) => void,
  onError: (message: string) => void,
) => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 60000,
  })
    .then(location => {
      onSuccess(location);
    })
    .catch(error => onError(error.message));
};
