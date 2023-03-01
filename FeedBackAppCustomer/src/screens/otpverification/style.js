import {StyleSheet} from 'react-native';
import {responsiveFontSize, responsiveHeight} from 'react-native-responsive-dimensions';
import {ROBOTO_MEDIUM} from '../../assets/fonts';
export default StyleSheet.create({
  img: {
    alignSelf: 'center',
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(5),
  },
  txtHeader: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    fontFamily: ROBOTO_MEDIUM,
    marginTop: responsiveHeight(6),
  },
  txt: {
    color: '#797979',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
    margin: responsiveHeight(3),
  },

  resend: {
    color: '#68BF90',
    fontFamily: ROBOTO_MEDIUM,
  },
  resendstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10%',
  },
  otptxt: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icons: {
    marginLeft: '4%',
    marginTop:'6%'
  },
});
