import {StyleSheet} from 'react-native';
import {responsiveFontSize, responsiveHeight} from 'react-native-responsive-dimensions';
import { verticalScale } from '../../components/responsive';
export default StyleSheet.create({
  img: {
    alignSelf: 'center',
    marginTop:verticalScale(20),
    marginBottom: responsiveHeight(5),
  },
  txtHeader: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontWeight: '600',
    lineHeight: 29,
    textAlign: 'center',
  },
  txt: {color: '#797979', fontSize: responsiveFontSize(1.5), textAlign: 'center', lineHeight: 24},
  login: {color: '#68BF90', fontSize: responsiveFontSize(1.7), fontWeight: '600'},
});
