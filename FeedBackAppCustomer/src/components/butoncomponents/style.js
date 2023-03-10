import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  btn: {
    alignItems: 'center',
    width: responsiveWidth(90),
    alignSelf: 'center',
    margin: responsiveWidth(5),
    padding: responsiveWidth(5),
    borderRadius: responsiveWidth(10),
  
  },
  txt: {
    fontWeight: 'bold',
    color: 'white',
  },
});
