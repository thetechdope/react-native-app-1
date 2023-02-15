import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import style from './style'
import CustomHeader from '../../components/customHeader'
import Inputcomponents from '../../components/textinputcomponents'
import Buttoncomponent from '../../components/butoncomponents'
import { Logopath } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../navigation/Routes'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Forgetpassword = () => {
  const navigation= useNavigation();
  return (
    <CustomHeader>
    <Ionicons onPress={()=>navigation.navigate(Routes.Login)} name="arrow-back" size={30} style={{marginVertical:'5%',marginLeft:'5%'}} />
      <Image style={style.img} source={Logopath.ForgetPasswordicon} />
      <Text style={style.txtHeader}>Forgot your password</Text>
      <Text style={style.txt}>Enter your registered email OR Phone below to receive password reset instruction</Text>
      <Inputcomponents placeholder={'Email'} />
      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
        <Text style={style.txt}>Remember password ?</Text>
        <Text style={style.login}> Login</Text>
      </View>
      <Buttoncomponent  
      value={'SEND'}
       onPress={()=>navigation.navigate(Routes.Otpverification)}
       
      />
    </CustomHeader>
  )
}
export default Forgetpassword