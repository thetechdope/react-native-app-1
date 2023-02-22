import {View, Text, SafeAreaView, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Routes} from '../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';
import {Logopath} from '../../assets/images';
import style from './style';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import CustomHeader from '../../components/customHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loginapi from '../../components/loginapi';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const customerlogininfo = async () => {
    if (!email || !password) {
      alert('please enter details');
    } else {
      let parm = {
        email: email,
        password: password,
      };
      setRefreshing(true);
      let response = await Loginapi(parm);
      console.log('response====', response);
      setRefreshing(false);
      if (response?.status) {
        navigation.navigate(Routes.Home);
      } else {
        alert('Login Failed');
      }
    }

    // .then((response) => {
    //   console.log(response);
    //   if (response.status) {

    //   } else {

    //   }
    // })
  };

  // useEffect(()=>{
  //   getUser()
  // },[])

  return (
    <CustomHeader>
      <Image source={Logopath.LOGINLOGO} style={styles.loginlogostyle} />
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
        {refreshing && <ActivityIndicator size="small" color="#0000ff" />}

        <Buttoncomponent
          value="SIGN IN"
          onPress={() => {
            // navigation.navigate(Routes.Home);
            customerlogininfo()
          }}
        />
      </View>
      <View style={styles.choice}>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Signup)}>
          <Text style={styles.choicetxt}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.Forgetpassword)}>
          <Text style={styles.choicetxt}>Forget Password</Text>
        </TouchableOpacity>
      </View>
    </CustomHeader>
  );
};

export default Login;
