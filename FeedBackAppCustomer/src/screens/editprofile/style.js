import {Dimensions, StyleSheet} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import {ROBOTO_MEDIUM} from '../../assets/fonts';
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: responsiveHeight(10),
    width: responsiveWidth(75),
  },

  pic: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    justifyContent: 'center',
    borderRadius: responsiveWidth(6),
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'grey',
    marginTop: responsiveHeight(8),
  },
  selectedimage: {
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    borderRadius: responsiveWidth(17.5),
  },

  picicons: {
    position: 'absolute',
    bottom: 0,
    left:responsiveWidth(3),
   
  },
  heading: {
    fontFamily: ROBOTO_MEDIUM,
    fontSize: 25,
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    marginTop: responsiveHeight(8),
  },
});
