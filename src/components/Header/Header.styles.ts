import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
    header: {
        width: '80%',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 15,
      },
      main: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.large,
        textAlign: 'center',
        color: COLORS.white,
      },
      description: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        opacity: SIZES.opacity,
        textAlign: 'center',
        color: COLORS.white,
      },
});

export default styles;
