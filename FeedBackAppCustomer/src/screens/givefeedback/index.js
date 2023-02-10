import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/customHeader'
import LinearGradient from 'react-native-linear-gradient'
import Buttoncomponent from '../../components/butoncomponents'

const GiveFeedback = () => {
  return (
    <CustomHeader>
      <Image style={{borderWidth:1,height:'30%',borderTopRightRadius: 30,borderTopLeftRadius: 30,margin:4}}/>
    <Text style={{color:'#000000',fontSize:20,lineHeight:24,marginTop:'6%',marginLeft:'5%'}}>Mcdonald's pizza</Text>
    <Text style={{color:'#000000',fontSize:14,lineHeight:17,marginTop:5,marginLeft:'5%'}}>Mcdonald's pizza</Text>
  
      <LinearGradient style={{height:'10%',width:'95%',alignSelf:'flex-end',borderBottomLeftRadius: 10, borderTopLeftRadius: 10,flexDirection:'row',alignItems:'center',marginTop:'10%'}} colors={['#7E50EE','#6833E9']}>
        <View style={{justifyContent:'center',marginLeft:'8%',width:'70%'}}>
        <Text style={{color:'#FFFFFF',fontSize:18,lineHeight:20,}}>Previous Rating</Text>
        <Text style={{color:'#E6DCFF',fontSize:13,lineHeight:15,}}>21-11-2022</Text>
        </View>
        <Image style={{height:40,width:40,borderRadius:20,borderWidth:1,backgroundColor:'#ffffff'}}/>
      </LinearGradient>

      <View style={{flexDirection:'row', alignItems:'center', marginTop:'8%',marginLeft:'8%'}}>
        <Image style={{height:40,width:40,borderRadius:20,borderWidth:1,backgroundColor:'#ffffff',marginRight:'4%'}}/>
        <Text style={{fontSize:14,color:'#797979'}}>227 40th sSt, New York, NY 10018, USA</Text>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', marginTop:'8%',marginLeft:'8%'}}>
        <Image style={{height:40,width:40,borderRadius:20,borderWidth:1,backgroundColor:'#ffffff',marginRight:'4%'}}/>
        <Text style={{fontSize:14,color:'#797979'}}>+1 212-933-8373</Text>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', marginTop:'8%',marginLeft:'8%'}}>
        <Image style={{height:40,width:40,borderRadius:20,borderWidth:1,backgroundColor:'#ffffff',marginRight:'4%'}}/>
        <Text style={{fontSize:14,color:'#797979'}}>guestmcdonaldsinfo@gmail.com</Text>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', marginTop:'8%',marginLeft:'8%'}}>
        <Image style={{height:40,width:40,borderRadius:20,borderWidth:1,backgroundColor:'#ffffff',marginRight:'4%'}}/>
        <Text style={{fontSize:14,color:'#797979'}}>www.mcdonalds.com/</Text>
      </View>

      <Buttoncomponent value={'ADD FEEDBACK'}/>
    
    </CustomHeader>
  )
}

export default GiveFeedback