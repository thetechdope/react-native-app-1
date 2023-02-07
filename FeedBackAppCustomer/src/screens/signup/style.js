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
     },
     pic:{
        height:100,
        width:100,
        backgroundColor:'grey',
        justifyContent:'center',
        borderRadius:50,
        alignItems:'center',
     alignSelf:"center"
        
     }, 
     selectedimage:{
        height:100,
        width:100,
        borderRadius:50
     },
     picicons:{
        position:'absolute',
        height:30,
        width:30,
        justifyContent:'center',
        alignSelf:'center',
        bottom:0,
        right:0,
        borderRadius:15
     }
    
})