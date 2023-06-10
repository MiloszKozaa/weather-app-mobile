import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: SIZES.xSmall,
    gap: SIZES.medium,
  },
  animation: {
    height: SIZES.animationIcon,
    width: SIZES.animationIcon,
  },
  temperature: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
  },
  description: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  date: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.xSmall,
    color: COLORS.white,
    opacity: SIZES.opacity,
  },
});

export default styles;
