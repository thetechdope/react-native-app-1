import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import style from './style'
import CustomHeader from '../../components/customHeader'
import Inputcomponents from '../../components/textinputcomponents'
import Buttoncomponent from '../../components/butoncomponents'
import { Logopath } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../navigation/Routes'
import OTPTextView from 'react-native-otp-textinput'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler'



const Otpverification = () => {
  
  const navigation= useNavigation();
  return (
    <CustomHeader>
      <TouchableOpacity onPress={()=>navigation.navigate(Routes.Forgetpassword)}>
      <Ionicons name="arrow-back" size={30}  style={style.icons}  />
      </TouchableOpacity>
      <Image style={style.img} source={Logopath.OTPICON} />
      <Text style={style.txtHeader}>OTP Verification</Text>
      <Text style={style.txt}>Enter the OTP send to your email</Text>
      <View style={style.otptxt}>
      <OTPTextView 
     
      />
      </View>
      <View style={style.resendstyle} >
        <Text >Don't recieve the OTP ? </Text>
        <Text style={style.resend}> RESEND OTP</Text>
      </View>
      <Buttoncomponent  
      value={'SUBMIT'}
      onPress={()=>navigation.navigate(Routes.Resetpassword)}
       
      />
    </CustomHeader>
  )
}
export default Otpverification