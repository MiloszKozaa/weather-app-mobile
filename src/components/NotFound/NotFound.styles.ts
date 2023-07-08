import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: SIZES.gap,
  },
  animation: {
    width: '100%',
  },
  header: {
    fontSize: SIZES.xLarge,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
  describe: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  hint: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    opacity: SIZES.opacity
  }
});

export default styles;
