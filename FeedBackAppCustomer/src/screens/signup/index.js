import React, {useEffect, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './style';
import {Logopath} from '../../assets/images';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useHeaderHeight} from '@react-navigation/elements';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../../components/customHeader';
import {Routes} from '../../navigation/Routes';
import Commonapi from '../../components/commonapi';
import {useSharedValue} from 'react-native-reanimated';
import axios from 'axios';

const options = {
  mediaType: 'photo',
};

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState();
  // const[customerinfo, setCustomerinfo] =useState({});
const [refreshing, setRefreshing]=useState(false)
  const headerHeight = useHeaderHeight();
  const [selectphoto, setSelectphoto] = useState('');

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log('result====>', result.assets[0]);
    setSelectphoto(result.assets[0].uri);

    // selectphoto.push(result.assets.uri)
  };
  const customervalue = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.+com)+$/;
    // console.log('firstName', firstName)
    // console.log('lastName', lastName)
    // console.log('email', email )
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   avatar: profilePhoto,
    //   phoneNumber: phoneNumber,
    //   password: password,
    // };
    // Commonapi(customerinfo)
    if (
      !firstName 
    
    ) {
      alert('Please Enter  FirstName');
    } else if(!lastName){
      alert('Please Enter  LastName');
    }else if(!email){
      alert('Please Enter  Email');
    }else  if (reg.test(email) === false) {
      alert('Email is Not Correct')
    }else if(!phoneNumber){
      alert('Please Enter  Phone number');
    }else if (phoneNumber.length!==10){
      alert('Please Enter Correct Phone number')
    }else if(!password){
      alert('Please Enter  password');
    }else if (password.length<6){
      alert('Password must have minimum 6 characters')
    }
    // else if(!selectphoto){
    //   alert('Please Add  Profile Photo');
    // }
    else {
      const formData = new FormData();
      {selectphoto && formData.append('avatar', {
        uri: selectphoto,
        type: 'image/jpg',
        name: 'abc.jpg',
      })
    }
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email.toLowerCase());
      formData.append('phoneNumber', phoneNumber);
      formData.append('password', password);
      setRefreshing(true)
    //  const respo=await Commonapi(formData);
    
     let response = await axios.post(
      'http://34.212.54.70:3000/api/customers/signup',
      formData,
    ).then(res=>{
      if(res.status==200){
        navigation.navigate(Routes.Otpverification, {email: email});
      }else{
        alert('')
      }
    })
    .catch(err=>{
      console.log('errSignup', err)
      if(err?.response?.status==400){
        Alert.alert("Warning!",`${err.response.data.message}`)
      }else{
        alert('Something went wrong')
      }
      })
     console.log("signupresp======", response)
      setRefreshing(false)
//       if(respo.status==false){
//         alert("User Alredy Registered")
//       }else{
//  navigation.navigate(Routes.Otpverification, {email: email});
//       }
     
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <CustomHeader>
              <Ionicons
                onPress={() => navigation.navigate(Routes.Login)}
                name="arrow-back"
                size={30}
                style={{marginVertical: '5%', marginLeft: '5%'}}
              />
              <Image
                source={Logopath.LOGINLOGO}
                style={styles.loginlogostyle}
              />
              <View style={styles.pic}>
                {selectphoto ? (
                  <Image
                    source={{uri: selectphoto}}
                    style={styles.selectedimage}
                  />
                ) : (
                  <Image
                    source={Logopath.Person}
                    style={styles.selectedimage}
                  />
                )}

                <View style={styles.picicons}>
                  <TouchableOpacity onPress={() => openGallery()}>
                    <Image source={Logopath.CameraImage} />
                    {/* <FontAwesome name="home" size={30} color="#900" /> */}
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.heading}>Signup</Text>
              <View>
                <Inputcomponents
                  placeholder="First Name"
                  label="First Name"
                  value={firstName}
                  onChangeText={txt => setFirstName(txt)}
                />
                <Inputcomponents
                  placeholder="Last Name"
                  label="Last Name"
                  value={lastName}
                  onChangeText={txt => setLastName(txt)}
                />
                <Inputcomponents
                  placeholder="Email"
                  label="Email"
                  value={email}
                  onChangeText={txt => setEmail(txt)}
                />
                <Inputcomponents
                  placeholder="Phone No."
                  label="Phone No."
                  value={phoneNumber}
                  onChangeText={txt => setPhoneNumber(txt)}
                />

                <Inputcomponents
                  placeholder="Password"
                  label="Password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={txt => setPassword(txt)}
                />
                <Buttoncomponent
                refreshing={refreshing}
                  value="CREAT A ACCOUNT"
                  onPress={() => {
                    //   setCustomerinfo({
                    //   firstName:firstName,
                    //   lastName:lastName,
                    //   email:email,
                    //   phoneNumber:phoneNumber,
                    //   password:password

                    // })
                    customervalue();
                  }}
                />
              </View>
            </CustomHeader>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
