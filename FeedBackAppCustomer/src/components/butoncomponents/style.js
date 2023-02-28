import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(90),
    alignSelf: 'center',
    margin: responsiveWidth(5),
    padding: responsiveWidth(5),
    borderRadius: responsiveWidth(10),
    backgroundColor: 'rgb(123,89,233)',
  },
  txt: {
    fontWeight: 'bold',
    color: 'white',
  },
});
