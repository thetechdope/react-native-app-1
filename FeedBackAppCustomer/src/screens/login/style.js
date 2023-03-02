import {StyleSheet} from 'react-native';
import {ROBOTO_MEDIUM} from '../../assets/fonts';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { horizontalScale, verticalScale } from '../../components/responsive';

export default StyleSheet.create({
 
  loginlogostyle: {
    marginTop: responsiveHeight(10),
    justifyContent: 'center',
    alignSelf: 'center',
    width: horizontalScale(300),
    resizeMode:'contain'
    // fontSize: responsiveFontSize(2)
  },
  heading: {
    fontSize: responsiveFontSize(3),
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '600',
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(5),
    fontFamily: ROBOTO_MEDIUM,
     color:'black'
  },
  inputstyle: {
    marginTop: responsiveHeight(5),
  },
  txt: {
    marginLeft:responsiveWidth(5),
    opacity: 0.5,
  },
  choice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginBottom:verticalScale(50)
  },
  choicetxt: {
    color: 'rgb(123,89,233)',
  },
  btnstyle: {
    marginTop: responsiveHeight(90),
  },
});
