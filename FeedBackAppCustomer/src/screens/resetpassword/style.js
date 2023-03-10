import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import {ROBOTO_MEDIUM, ROBOTO_REGULAR} from '../../assets/fonts';

export default StyleSheet.create({
  title: {
    fontSize: responsiveFontSize(2.4),
    color: '#000000',
    fontFamily: ROBOTO_MEDIUM,
    textAlign: 'center',
  },
  contentTxt: {
    fontSize: responsiveFontSize(1.5),
    color: '#797979',
    fontFamily: ROBOTO_REGULAR,
    textAlign: 'center',
    marginHorizontal: responsiveWidth(15),
    marginVertical: responsiveHeight(5),
  },
});
