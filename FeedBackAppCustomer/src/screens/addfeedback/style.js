import { Dimensions, StyleSheet } from "react-native";
import { ROBOTO_MEDIUM } from "../../assets/fonts";
const {width, height}=  Dimensions.get('window');

export default StyleSheet.create({
    head:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'10%',
        width:width*.74,
    },
    heading:{
        fontFamily:ROBOTO_MEDIUM,
        fontSize:22,
        position:'relative',
        justifyContent:'space-evenly',
        alignItems:'center'   
      },
      txthead:{
        fontFamily:ROBOTO_MEDIUM,
        fontSize:16,
        margin:'10%'

      },
      txt:{
        marginLeft:'10%',
        fontFamily:ROBOTO_MEDIUM, 
        opacity:.7,
        fontSize:15

      },
      img:{
        height:80,
        width:80
      }, 
      imgdirection:{
        flexDirection:'row', 
        justifyContent:'space-evenly',
        marginTop:'6%'
      },
      input:{
        height:200,
        width:"90%",
        borderWidth:1,
        marginTop:"6%",
        borderRadius:8,
        alignSelf:'center',
        padding:10,
      },
      btn:{
        marginTop:'15%'
      }

})