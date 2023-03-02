<<<<<<< HEAD
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
=======
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
>>>>>>> 33fae78969db895a2a2ba3366b422f1d27c0e71d
import React, {useEffect, useState} from 'react';
import style from './style';
import CustomHeader from '../../components/customHeader';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import {Logopath} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import Ionicons from 'react-native-vector-icons/Ionicons';

import axios from 'axios';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Forgetpassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const resetPassword = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.+com)+$/;
     if (!email) {
      alert('please enter details');
    }else if (reg.test(email) === false) {
      alert('Email is Not Correct')
    }else{
    const response = await axios.get(
      `http://34.212.54.70:3000/api/customers/forgot-password/${email}`,
    );
    console.log('=========>', response);
    navigation.navigate(Routes.Otpverification, {
      email: email.toLowerCase(),
      from: 'OTP',
    });
  }
  };
  return (
    <CustomHeader>
    <ScrollView>
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
          setEmail(txt);
        }}
      />
      <View
        style={{flexDirection: 'row', padding: responsiveHeight(2), justifyContent: 'center', alignItems:'center'}}>
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
          
        }}
      />
      </ScrollView>
    </CustomHeader>
  );
};
export default Forgetpassword;
