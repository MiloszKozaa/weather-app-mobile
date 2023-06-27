import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 65,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    height: '100%',
    width: '90%',
    padding: 0,
  },
  icon: {
    height: '100%',
    width: '10%',
  }
});

export default styles;
