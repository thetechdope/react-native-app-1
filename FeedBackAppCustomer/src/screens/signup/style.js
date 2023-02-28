import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
 
 
  loginlogostyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    width:responsiveWidth(90)
  },
  heading: {
    fontSize: responsiveFontSize(3),
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '600',
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(5),
  },
 
  choice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  choicetxt: {
    color: 'rgb(123,89,233)',
  },
  btnstyle: {
    marginTop: responsiveHeight(5),
  },
  pic: {
    height: responsiveHeight(12),
    width: responsiveHeight(12),
    backgroundColor: 'grey',
    justifyContent: 'center',
    borderRadius: responsiveHeight(6),
    alignItems: 'center',
    alignSelf: 'center',
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
