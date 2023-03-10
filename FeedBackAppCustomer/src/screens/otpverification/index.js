import {View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
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
import Commonapi from '../../components/commonapi';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Otpverification = ({route: {params}}) => {
  // console.log('props', params);
  const [email, setEmail] = useState();
  const [otp, setOtp] = useState();
  const [refreshing, setRefreshing]=useState(false)

  useEffect(() => {
    setEmail(params?.email);
  }, [email]);

  const navigation = useNavigation();

  const SubmitOtp = async() => {
    console.log('email===>', email)
    console.log('otp===>', otp)

    if(!otp){
      alert("Enter Otp")
    }else{
      let body = {
        email: email.toLowerCase(),
        otp: otp,
      };
   const otpVerify= await  axios
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
          }
          else {
            alert('Incorrect OTP');
            console.log('otpResponse', res)
          }
        })
        .catch(err => {
          console.log('err===>', err);
          alert("Something went wrong")
        });
       
    }

   
  };
const reSendOtp =async()=>{
  let body = {
    email: email,
    
  };
  try{
    const responsdata = await axios.get(`http://34.212.54.70:3000/api/customers/resend-otp/${email}` )
    alert("OTP Sent Again ")
    console.log("========12222223333", responsdata)
  }catch(err){
    console.log("wwwwwwwwwwwwwww==>",err)
    alert('Something went wrong')
  }

}

  return (
    <CustomHeader>
    <ScrollView>
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
        <TouchableOpacity 
        onPress={()=>{
          reSendOtp()
        }}
        >
          <Text style={style.resend}> RESEND OTP</Text>
        </TouchableOpacity>
      </View>
      <Buttoncomponent
       refreshing={refreshing}
        value={'SUBMIT'}
        onPress={() => {
          SubmitOtp();
        }}
      />
      </ScrollView>
    </CustomHeader>
  );
};
export default Otpverification;
