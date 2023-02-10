import { StyleSheet } from "react-native";
import { ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../assets/fonts';

export default StyleSheet.create({
    title:{
        fontSize:24,
        color:'#000000',
        fontFamily:ROBOTO_MEDIUM,
        textAlign:'center'
    },
    contentTxt:{
        fontSize:15,
        color:'#797979',
        fontFamily:ROBOTO_REGULAR,
        textAlign:'center',
        marginHorizontal:'15%',
        marginVertical:'5%'
    }
})