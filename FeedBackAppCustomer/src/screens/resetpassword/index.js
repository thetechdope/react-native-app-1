import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/customHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import style from './style';

const Resetpassword = () => {
  return (
    <CustomHeader>
            <Ionicons name="arrow-back" size={30} style={{margin:'10%'}} />
            <Text style={style.title}>Reset Password</Text>
            <Text style={style.contentTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            
            <Inputcomponents label={'New Password'} secureTextEntry={true} customStyle={{margin:'3%'}}/>
            <Inputcomponents label={'Confirm Password'} secureTextEntry={true} customStyle={{margin:'3%', marginBottom:'5%'}}/>

            <Buttoncomponent value={'Reset Password'}/>
      
    </CustomHeader>
  )
}

export default Resetpassword