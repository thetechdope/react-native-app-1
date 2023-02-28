import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import styles from './style';
import { Logopath } from '../../assets/images';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useHeaderHeight } from '@react-navigation/elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../../components/customHeader';
import { Routes } from '../../navigation/Routes';
import Commonapi from '../../components/commonapi';
import { useSharedValue } from 'react-native-reanimated';
import axios from 'axios';

const options = {
  mediaType: 'photo',
};

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState();
  // const[customerinfo, setCustomerinfo] =useState({});

  const headerHeight = useHeaderHeight();
  const [selectphoto, setSelectphoto] = useState("");



  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log('result====>', result.assets[0]);
    setSelectphoto(result.assets[0].uri);

    // selectphoto.push(result.assets.uri)
  };
  const customervalue = () => {
    // let parm = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   avatar: profilePhoto,
    //   phoneNumber: phoneNumber,
    //   password: password,
    // };
    // Commonapi(customerinfo)

    const formData = new FormData();
    formData.append("avatar", {
      uri: selectphoto,
      type: "image/jpg",
      name: "abc.jpg",
    });
    formData.append("firstName", firstName)
    formData.append("lastName", lastName)
    formData.append("email", email)
    formData.append("phoneNumber", phoneNumber)
    formData.append("password", password)

    Commonapi(formData);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <CustomHeader>
              <Ionicons
                onPress={() => navigation.navigate(Routes.Login)}
                name="arrow-back"
                size={30}
                style={{ marginVertical: '5%', marginLeft: '5%' }}
              />
              <Image
                source={Logopath.LOGINLOGO}
                style={styles.loginlogostyle}
              />
              <View style={styles.pic}>
                {selectphoto ? (
                  <Image
                    source={{ uri: selectphoto }}
                    style={styles.selectedimage}
                  />
                ) : (
                  <Image
                    source={Logopath.Profiledefault}
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
                  value="CREAT ACCOUNT"
                  onPress={() => {
                    //   setCustomerinfo({
                    //   firstName:firstName,
                    //   lastName:lastName,
                    //   email:email,
                    //   phoneNumber:phoneNumber,
                    //   password:password

                    // })
                    customervalue();

                    navigation.navigate(Routes.Otpverification,{email:email});
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
