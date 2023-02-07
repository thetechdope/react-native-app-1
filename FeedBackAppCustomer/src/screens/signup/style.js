import { StyleSheet } from "react-native";

export default StyleSheet.create({
    maincontainer:{
        backgroundColor:'rgb(123, 89 ,233)',
        flex:1,

    },
    container:{
        flex:1,
        marginTop:"16%",
        borderTopRightRadius:30,
        borderTopLeftRadius:30, 
        backgroundColor:'white',
        
        

    },
    loginlogostyle:{
        marginTop:"18%",
        justifyContent:'center',
        alignSelf:'center',

    },
    heading:{

        fontSize:20,
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'600', 
         marginTop:"15%",
         marginBottom:'6%'
    },
     inputstyle:{
        marginTop:"15%"
        
     },
     txt:{
        marginLeft:"6%",
        opacity:.5
     },
     choice:{
        flexDirection:"row", 
        justifyContent:'space-between',
        width:'90%', 
        alignSelf:'center',

     },
     choicetxt:{
        
        color:'rgb(123,89,233)',
     },
     btnstyle:{
        marginTop:'5%'
     }
    
})