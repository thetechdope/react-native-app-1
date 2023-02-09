import { Dimensions, StyleSheet } from "react-native";
import { ROBOTO_MEDIUM } from "../../assets/fonts";
// const {width, height} = Dimensions.

export default StyleSheet.create({
    Inputvalue: {
        paddingLeft: '2%',
        borderRadius: 8,

    },
    txt: {
        fontSize: 14,
        paddingLeft: '2%',
        margin:4  ,
        fontFamily:ROBOTO_MEDIUM
        
    },
    container: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        padding: 8, 
        margin:10,
        borderWidth:.2,
        opacity:.6




    },
   
})