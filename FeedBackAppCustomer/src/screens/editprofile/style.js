import { Dimensions, StyleSheet } from 'react-native';
import { ROBOTO_MEDIUM } from '../../assets/fonts';
const {width, height}=  Dimensions.get('window');
export default StyleSheet.create({
    head:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'10%',
        width:width*.74,


    },
   
    pic: {
        height: 120,
        width: 120,
        justifyContent: 'center',
        borderRadius: 60,
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor:'grey'

    },
    selectedimage: {
        height: 120,
        width: 120,
        borderRadius: 60
    },

    picicons: {
        position: 'absolute',
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 0,
        right: 0,
        borderRadius: 15
    },
    heading:{
      fontFamily:ROBOTO_MEDIUM,
      fontSize:25,
      position:'relative',
      justifyContent:'space-evenly',
      alignItems:'center'   
    },
    input:{
        marginTop:'15%'
    }
});
