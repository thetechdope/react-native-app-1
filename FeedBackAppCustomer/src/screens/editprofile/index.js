import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import CustomHeader from '../../components/customHeader';
import Inputcomponents from '../../components/textinputcomponents';
import Buttoncomponent from '../../components/butoncomponents';
import {Logopath} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useHeaderHeight} from '@react-navigation/elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetLocation from 'react-native-get-location';
import axios from 'axios';

const options = {
  mediaType: 'photo',
};

const Editprofile = () => {
  const headerHeight = useHeaderHeight();

  const [selectphoto, setSelectphoto] = useState('');
  const [firstName, setFirstName] = useState('');
  const [user, setUser] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const [userlocation, setUserlocation] = useState({});
  const [currentlocation, setCurrentlocation] = useState({});

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log('result====>', result.assets[0].uri);
    setSelectphoto(result.assets[0].uri);
    // selectphoto.push(result.assets.uri)
  };
  useEffect(() => {
    getCurrentLocation();
    getUser();
    getlocation();
  }, []);
  const getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setCurrentlocation({...location});
        // console.log(location)
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem('user'));
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };
  const getlocation = async () => {
    const result = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${currentlocation.latitude}&longitude=${currentlocation.longitude}&localityLanguage=en`,
    );

    setUserlocation(result.data);
    console.log(result.data);
  };

  const customervalue = async() => {
    const formData = new FormData();
    formData.append("avatar", {
      uri: selectphoto,
      type: "image/jpg",
      name: "abc.jpg",
    });
    formData.append("firstName", firstName)
    formData.append("lastName", lastName)
    formData.append("phoneNumber", phoneNumber)
   
    let config = {headers: {Authorization: `Bearer ${user.token}`}};
    let response = await axios.patch(
      'http://34.212.54.70:3000/api/customers/update-customer/',
      formData,
      config,
    );
    if (response.status == 200) {
      console.log('respone====>', response);
      return {status: true, data: response.data};
    } else {
      return {status: false};
    }
  } 
  

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <CustomHeader>
              <View style={styles.head}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(Routes.Settings);
                  }}>
                  <Ionicons name="arrow-back" size={30} />
                </TouchableOpacity>
                <Text style={styles.heading}>Edit Profile</Text>
              </View>
              <View style={styles.pic}>
                {selectphoto ? (
                  <Image
                    source={{uri: selectphoto}}
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
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.input}>
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
                  placeholder={user.email}
                  label="Email"
                  editable={false}
                  selectTextOnFocus={false}
                />
                <Inputcomponents
                  placeholder="Phone No."
                  label="Phone No."
                  value={phoneNumber}
                  onChangeText={txt => setPhoneNumber(txt)}
                />
                <Inputcomponents
                  placeholder={userlocation.city}
                  label="Address"
                  editable={false}
                  selectTextOnFocus={false}
                />
              </View>

              <Buttoncomponent 
              value={'UPDATE'} 
              onPress={() => {
                customervalue();
                // navigation.navigate(Routes.Otpverification);
              }}
              />
            </CustomHeader>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Editprofile;
