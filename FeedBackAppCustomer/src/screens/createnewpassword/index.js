import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/customHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import style from './style';

const Createnewpassword = () => {
  return (
    <CustomHeader>
            <Ionicons name="arrow-back" size={30} style={{margin:'10%'}} />
            <Text style={style.title}>Create New Password</Text>
            <Text style={style.contentTxt}>We've sent the code to the email on your device.</Text>
            <Inputcomponents label={'Old Password'} secureTextEntry={true} customStyle={{margin:'3%'}}/>
            <Inputcomponents label={'New Password'} secureTextEntry={true} customStyle={{margin:'3%'}}/>
            <Inputcomponents label={'Confirm Password'} secureTextEntry={true} customStyle={{margin:'3%', marginBottom:'5%'}}/>

            <Buttoncomponent value={'Reset Password'}/>
      
    </CustomHeader>
  )
}

export default Createnewpassword