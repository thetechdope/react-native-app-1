import {
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {Routes} from '../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';
import {Logopath} from '../../assets/images';
import style from './style';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import CustomHeader from '../../components/customHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loginapi from '../../components/loginapi';
import {useHeaderHeight} from '@react-navigation/elements';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const headerHeight = useHeaderHeight();

  const customerlogininfo = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.+com)+$/;
     if (!email || !password) {
      alert('please enter details');
    }else if (reg.test(email) === false) {
      alert('Email is Not Correct')
    } else {
      let parm = {
        email: email.toLocaleLowerCase(),
        password: password,
      };
      setRefreshing(true);
      let response = await Loginapi(parm);
      // console.log('response====', response);
      setRefreshing(false);
      console.log('loginresponse==>',response)
      if(response.status && response.data.isEmailVerfified && response.data.isActive){
        navigation.navigate(Routes.Home);
      }else if(response.status && response.data.isActive && response.data.isEmailVerfified==false){
        console.log('email==>', email)
            const responsdata = await axios.get(`http://34.212.54.70:3000/api/customers/resend-otp/${email.toLocaleLowerCase()}`)
            .then(res=>{
                navigation.navigate(Routes.Otpverification,{email:email})
            }).catch(err=>alert('something went wrong'))
        alert('Please verify your Email')
        }else if(response.status && !response.data.isActive){
          alert('Account Has Been Blocked by Admin Panel');
        }else if(response.Status==400){
          alert('Email/Password is inccorect')
        }else{
          alert('Something went Wrong')
        }
      }
      // if (response.status) {
      //   if (response.data.isActive) {
      //     navigation.navigate(Routes.Home);
      //   } else {
      //     alert('Account Has Been Blocked by Admin Panel');
      //   }
       
      // } else {
      //   alert('Email / Password is Incorrect');
      // }
    // }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor:'#ffffff'}}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <CustomHeader>
              <Image
                source={Logopath.LOGINLOGO}
                style={styles.loginlogostyle}
              />
              <Text style={styles.heading}>Login</Text>
              <View style={styles.inputstyle}>
                <Inputcomponents
                  placeholder="Email"
                  label="Email"
                  value={email}
                  onChangeText={txt => setEmail(txt)}
                />
                <Inputcomponents
                  placeholder="password"
                  label="Password"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={txt => setPasssword(txt)}
                />
                {/* {refreshing && (
                  <ActivityIndicator size="small" color="#0000ff" />
                )} */}

                <Buttoncomponent
                refreshing={refreshing}
                  value="SIGN IN"
                  onPress={() => {
                    customerlogininfo();
                  }}
                />
              </View>
              {/* {console.log('Render ======')} */}
              <View style={styles.choice}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('helloooooo');
                    navigation.navigate(Routes.Signup);
                  }}>
                  <Text style={styles.choicetxt}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate(Routes.Forgetpassword)}>
                  <Text style={styles.choicetxt}>Forget Password</Text>
                </TouchableOpacity>
              </View>
            </CustomHeader>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
