import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    paddingBottom: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorWrapper: {
    height: '100%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '30%'
  },
  currentWeather: {
    width: '80%',
    height: '28%',
  },
  daySelector: {
    height: '18%',
  },
  daySelectorLoading: {
    height: '18%',
    width: '80%',
  },
  scrollViewContent: {
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: '10%',
  },
  weatherChart: {
    width: '80%',
    height: '44%',
  },
});

export default styles;
