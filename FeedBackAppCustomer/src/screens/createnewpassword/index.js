import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/customHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import style from './style';
import newPasswordvalue from '../../components/ newPasswordvalue';
import {Routes} from '../../navigation/Routes';

const Createnewpassword = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const changePassword = async () => {

    if(!currentPassword && !newPassword &&!confirmPassword){
      alert("Please Enter Details")
    }else if(!currentPassword){
      alert("Please Enter Current Password")
    }
    else if(!newPassword){
      alert("Please Enter New Password")
    }
    else if(!confirmPassword){
      alert("Please Confirm your Password")
    }else if(currentPassword.length<6 ){
      alert("Password must have minimum 6 characters")
    }
    else if(newPassword.length<6){
      alert("Password must have minimum 6 characters")
    }
    else if(confirmPassword.length<6){
      alert("Password must have minimum 6 characters")

    } 
    else if(newPassword!==confirmPassword){
      alert("Password Is Not Matched")
    }else if(newPassword===currentPassword){
      alert("New Password can't be same as Current Password!")
    }
    else{
      let parm = {
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      };
  
      let response = await newPasswordvalue(parm);
      console.log('response====', response);
  
      if (response?.status) {
        alert('Password Change Sucessfully');
        navigation.navigate(Routes.Settings);
      } else {
        alert('Failed to change Password');
      }
    }
   
  };

  return (
    <CustomHeader>
      <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.replace(Routes.Settings);
        }}>
        <Ionicons name="arrow-back" size={30} style={{margin: '10%'}} />
      </TouchableOpacity>
      <Text style={style.title}>Create New Password</Text>
      <Text style={style.contentTxt}>
        We've sent the code to the email on your device.
      </Text>
      <Inputcomponents
        placeholder="Crrent Password"
        label="Current Password"
        value={currentPassword}
         secureTextEntry={true}
        onChangeText={txt => setCurrentPassword(txt)}
      />
      <Inputcomponents
        placeholder="NewPassword"
        label="New Password"
        value={newPassword}
        secureTextEntry={true}
        onChangeText={txt => setNewPassword(txt)}
      />
      <Inputcomponents
        placeholder="Confirm Password"
        label="Confirm Password"
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={txt => setConfirmPassword(txt)}
      />
      <Buttoncomponent
        onPress={() => {
          changePassword();
        }}
        value={'Reset Password'}
      />
       </ScrollView>
    </CustomHeader>
  );
};

export default Createnewpassword;
