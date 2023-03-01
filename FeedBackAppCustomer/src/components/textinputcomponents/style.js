import {Dimensions, StyleSheet} from 'react-native';
import {ROBOTO_MEDIUM} from '../../assets/fonts';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  Inputvalue: {
    paddingLeft: responsiveWidth(2.5),
  },
  txt: {
    fontSize:responsiveFontSize(2),
    paddingLeft: responsiveWidth(2.5),
    marginVertical: responsiveWidth(1),
    fontFamily: ROBOTO_MEDIUM,
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
