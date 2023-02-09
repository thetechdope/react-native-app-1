import { StyleSheet } from "react-native";
import { ROBOTO_REGULAR } from "../../assets/fonts";

export default StyleSheet.create({
    topContainer:{
        flexDirection:'row',
        marginTop:70,
        alignItems:'center',
        marginBottom:'12%'
    },
    profileLogo:{
        height:80,
        width:80,
        borderWidth:1,
        borderRadius:40,
        marginLeft:15,
    },
    name:{
        fontSize:17,
        fontFamily:ROBOTO_REGULAR,
        color:'#000000',
        fontWeight:'600'
    },
    optionsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:0.2,
        height:'8%',
        alignItems:'center',
        },
    icon:{
        height:16,
        width:16,
        marginHorizontal:15
        }
})