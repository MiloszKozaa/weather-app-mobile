import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    gap: SIZES.gap,
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: SIZES.gap,
    height: '100%',
  },
});

export default styles;
