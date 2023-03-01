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

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const headerHeight = useHeaderHeight();

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
                  onChangeText={txt => setEmail(txt.toLowerCase())}
                />
                <Inputcomponents
                  placeholder="password"
                  label="Password"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={txt => setPasssword(txt)}
                />
                {refreshing && (
                  <ActivityIndicator size="small" color="#0000ff" />
                )}

                <Buttoncomponent
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
