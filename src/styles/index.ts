import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const appStyles = StyleSheet.create({
  screen: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingTop: 90,
  },
  wrapper: {
    padding: SIZES.medium,
  },
  wrapperColor: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    width: '100%',
    height: '100%',
  },
  wrapperFill: {
    backgroundColor: COLORS.additional,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    width: '100%',
    height: '100%',
  },
  wrapperBorder: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.accessory,
    borderWidth: SIZES.border,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    width: '100%',
    height: '100%',
  },
  wrapperBorderWhite: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.white,
    borderWidth: SIZES.border,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    width: '100%',
    height: '100%',
  },
  loadingStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.additional,
  },
});

export default appStyles;
