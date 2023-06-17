import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  barWrapper: {
    alignItems: 'center',
    width: '10.5%',
    marginLeft: '2%',
  },
  bar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 5,
    width: '100%',
  },
  value: {
    fontFamily: FONTS.semiBold,
    color: COLORS.background,
    fontSize: SIZES.small,
  },
  largeValue: {
    fontFamily: FONTS.semiBold,
    color: COLORS.background,
    fontSize: SIZES.xSmall,
  },
  label: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    paddingVertical: 5,
    color: COLORS.accessory,
  },
});

export default styles;
