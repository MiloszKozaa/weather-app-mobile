import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../../../constants';

const styles = StyleSheet.create({
  wrapper: {
    height: 120,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  name: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
  },
  number: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
  },
});

export default styles;
