import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/customHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import style from './style';
import {Routes} from '../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Resetpassword = props => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(props.route?.params?.email);
  }, []);
  const Submit = async () => {
    let body = {
      email: email,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    await axios
      .patch('http://34.212.54.70:3000/api/customers/reset-password', body)
      .then(res => {
        console.log('otpres777777777===>', res);
        if (res?.status) {
          alert('Password Reset Successfully done !');

          navigation.navigate(Routes.Login);
        } else {
          alert('Failed to Reset Password !');
        }
      })
      .catch(err => {
        console.log('err===>', err);
      });
  };
  return (
    <CustomHeader>
      <Ionicons
        name="arrow-back"
        size={30}
        style={{margin: '10%'}}
        onPress={() => {
          navigation.navigate(Routes.Otpverification);
        }}
      />
      <Text style={style.title}>Reset Password</Text>
      <Text style={style.contentTxt}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Inputcomponents
        label={'New Password'}
        value={newPassword}
        onChangeText={txt => setNewPassword(txt)}
        secureTextEntry={true}
      />
      <Inputcomponents
        label={'Confirm Password'}
        value={confirmPassword}
        onChangeText={txt => setConfirmPassword(txt)}
        secureTextEntry={true}
      />

      <Buttoncomponent
        value={'Reset Password'}
        onPress={() => {
          Submit();
        }}
      />
    </CustomHeader>
  );
};

export default Resetpassword;
