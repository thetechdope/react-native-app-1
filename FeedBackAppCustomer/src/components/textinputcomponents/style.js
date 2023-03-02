import {Dimensions, StyleSheet} from 'react-native';
import {ROBOTO_MEDIUM} from '../../assets/fonts';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { horizontalScale, moderateScale, verticalScale } from '../responsive';


export default StyleSheet.create({
  Inputvalue: {
    paddingLeft: horizontalScale(10),
  },
  txt: {
    fontSize:moderateScale(16),
    paddingLeft: horizontalScale(10),
    marginVertical: verticalScale(1),
    fontFamily: ROBOTO_MEDIUM,
    color:'black'
  },
  container: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: responsiveWidth(2),
    padding: responsiveWidth(2),
    margin: responsiveWidth(2),
    borderWidth: responsiveWidth(.1),
    opacity: .8,
  },
});
