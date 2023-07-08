import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../../constants';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '15%',
  },
  unit: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
  buttonsWrapper: {
    gap: 10,
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartWrapper: {
    width: '100%',
    height: '80%',
  },
});

export default styles;
