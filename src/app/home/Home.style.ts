import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import {screenDisplay} from '../../services';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    paddingBottom: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
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
