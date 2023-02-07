import { StyleSheet } from "react-native"
import * as Fonts from '../../assets/fonts'


export default StyleSheet.create({
    maincontainer:{
        backgroundColor:'rgb(123, 89 ,233)',
        flex:1,

    },
   
    container:{
        flex:1,
        marginTop:"20%",
        borderTopRightRadius:30,
        borderTopLeftRadius:30, 
        backgroundColor:'white'
        

    },
    loginlogostyle:{
        marginTop:"10%",
        justifyContent:'center',
        alignSelf:'center',

    },
    heading:{
        // fontFamily:Fonts.ROBOTO_MEDIUM,
        fontSize:20,
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold', 
         marginTop:"10%"
    },
     inputstyle:{
        marginTop:"6%"
     }
    
})