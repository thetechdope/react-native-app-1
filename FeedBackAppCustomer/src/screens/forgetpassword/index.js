import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import CustomHeader from '../../components/customHeader';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import {Logopath} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Forgetpassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const resetPassword = async () => {
    const response = await axios.get(
      `http://34.212.54.70:3000/api/customers/forgot-password/${email}`,
    );
    console.log('=========>', response);
  };
  return (
    <CustomHeader>
      <Ionicons
        onPress={() => navigation.navigate(Routes.Login)}
        name="arrow-back"
        size={30}
        style={{marginVertical: '5%', marginLeft: '5%'}}
      />
      <Image style={style.img} source={Logopath.ForgetPasswordicon} />
      <Text style={style.txtHeader}>Forgot your password</Text>
      <Text style={style.txt}>
        Enter your registered email OR Phone below to receive password reset
        instruction
      </Text>
      <Inputcomponents
      label="Email"
        value={email}
        placeholder={'Email'}
        onChangeText={txt => {
          setEmail(txt.toLowerCase());
        }}
      />
      <View
        style={{flexDirection: 'row', padding: responsiveHeight(2), justifyContent: 'center'}}>
        <Text style={style.txt}>Remember password ?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.replace(Routes.Login);
          }}>
          <Text style={style.login}> Login</Text>
        </TouchableOpacity>
      </View>
      <Buttoncomponent
        value={'SEND'}
        onPress={() => {
          resetPassword();
          navigation.navigate(Routes.Otpverification, {
            email: email,
            from: 'OTP',
          });
        }}
      />
    </CustomHeader>
  );
};
export default Forgetpassword;
