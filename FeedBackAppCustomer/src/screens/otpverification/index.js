import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import style from './style';
import CustomHeader from '../../components/customHeader';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import {Logopath} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import OTPTextView from 'react-native-otp-textinput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Commonapi from '../../components/commonapi';
import axios from 'axios';

const Otpverification = ({route: {params}}) => {
  console.log('props', params);
  const [email, setEmail] = useState();
  const [otp, setOtp] = useState();

  useEffect(() => {
    setEmail(params?.email);
  }, [email]);

  const navigation = useNavigation();

  const SubmitOtp = () => {
    let body = {
      email: email,
      otp: otp,
    };
    axios
      .patch('http://34.212.54.70:3000/api/customers/verify-email', body)
      .then(res => {
        console.log('otpres===>', res);
        if (res.data.status == true) {
          alert('OTP Verified Successfully');
          if (params?.from == 'OTP') {
            navigation.navigate(Routes.Resetpassword, {email: email});
          } else {
            navigation.navigate(Routes.Login);
          }
        } else {
          alert('Incorrect Password');
        }
      })
      .catch(err => {
        console.log('err===>', err);
      });
  };
  return (
    <CustomHeader>
      <TouchableOpacity
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} style={style.icons} />
      </TouchableOpacity>
      <Image style={style.img} source={Logopath.OTPICON} />
      <Text style={style.txtHeader}>OTP Verification</Text>
      <Text style={style.txt}>Enter the OTP send to your email</Text>
      <View style={style.otptxt}>
        <OTPTextView handleTextChange={txt => setOtp(txt)} />
      </View>
      <View style={style.resendstyle}>
        <Text>Don't recieve the OTP ? </Text>
        <TouchableOpacity>
          <Text style={style.resend}> RESEND OTP</Text>
        </TouchableOpacity>
      </View>
      <Buttoncomponent
        value={'SUBMIT'}
        onPress={() => {
          SubmitOtp();
        }}
      />
    </CustomHeader>
  );
};
export default Otpverification;
