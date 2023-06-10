import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 50,
  },
  header: {
    width: '80%',
    alignItems: 'center',
    gap: SIZES.medium,
  },
  appName: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
  },
  description: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.medium,
    color: COLORS.white,
    opacity: SIZES.opacity,
    textAlign: 'center',
    width: '80%',
  },
  backgroundScreen: {
    flex: 1,
    position: 'absolute',
  },
});

export default styles;
