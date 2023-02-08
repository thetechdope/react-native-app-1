import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import style from './style'
import CustomHeader from '../../components/customHeader'
import Inputcomponents from '../../components/textinputcomponents'
import Buttoncomponent from '../../components/butoncomponents'
import { Logopath } from '../../assets/images'
const Forgetpassword = () => {
  return (
    <CustomHeader>
      <Image style={style.img} source={Logopath.ForgetPasswordicon} />
      <Text style={style.txtHeader}>Forgot your password</Text>
      <Text style={style.txt}>Enter your registered email OR Phone below to receive password reset instruction</Text>
      <Inputcomponents placeholder={'Email'} />
      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
        <Text style={style.txt}>Remember password ?</Text>
        <Text style={style.login}> Login</Text>
      </View>
      <Buttoncomponent value={'SEND'} />
    </CustomHeader>
  )
}
export default Forgetpassword