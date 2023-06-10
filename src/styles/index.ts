import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const appStyles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingTop: 90,
    gap: 30,
  },
  wrapper: {
    width: '80%',
    padding: SIZES.medium,
  },
  wrapperColor: {
    backgroundColor: COLORS.primary,
    width: '80%',
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  wrapperFill: {
    backgroundColor: COLORS.additional,
    width: '80%',
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  wrapperBorder: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.accessory,
    borderWidth: SIZES.border,
    width: '80%',
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
});

export default appStyles;
