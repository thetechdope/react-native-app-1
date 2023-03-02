import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
 import { horizontalScale, moderateScale, verticalScale, } from '../../components/responsive';

export default StyleSheet.create({
 
 
  loginlogostyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    width:horizontalScale(390), 
    resizeMode:'contain'
  },
  heading: {
    fontSize: moderateScale(20),
    justifyContent: 'center',
    color:"black",
    alignSelf: 'center',
    fontWeight: '600',
    marginBottom:verticalScale(3),
    marginTop: verticalScale(15),
  },
 
  choice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: horizontalScale(10),
    alignSelf: 'center',
  },
  choicetxt: {
    color: 'rgb(123,89,233)',
  },
  btnstyle: {
    marginTop: verticalScale(5),
  },
  pic: {
    height: responsiveHeight(12),
    width: responsiveHeight(12),
    backgroundColor: 'grey',
    justifyContent: 'center',
    borderRadius: responsiveHeight(6),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop:responsiveHeight(2)
  },
  selectedimage: {
    height: responsiveHeight(14),
    width: responsiveHeight(14),
    borderRadius: responsiveHeight(7),
  },

  picicons: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 0,  
    right: 0,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
