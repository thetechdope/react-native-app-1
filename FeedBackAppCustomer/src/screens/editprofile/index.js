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
  TouchableOpacity,
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

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useHeaderHeight} from '@react-navigation/elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetLocation from 'react-native-get-location';
import axios from 'axios';
import UpdateCustomerapi from '../../components/updatecustomerapi';

const options = {
  mediaType: 'photo',
};

const Editprofile = () => {
  const headerHeight = useHeaderHeight();
  const [refreshing, setRefreshing] = useState(false);
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
    console.log('profileImgresult====>', result.assets[0].uri);
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
      console.log('userData=>', user);
      setFirstName(userData?.firstName);
      setLastName(userData?.lastName);
      setPhoneNumber(userData?.phoneNumber);
      setSelectphoto(userData?.profileImage);
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

  const customervalue = async () => {
    // if (
    //   !firstName

    // ) {
    //   alert('Please Enter  FirstName');
    // } else if(!lastName){
    //   alert('Please Enter  LastName');
    // }
    // else if(!phoneNumber){
    //   alert('Please Enter  Phonenumber');

    // }else if(!selectphoto){
    //   alert('Please Add  Profile Photo');
    // }
    // else {
    const formData = new FormData();
    {
      selectphoto
        && formData.append('avatar', selectphoto)
        // : formData.append('avatar', {
        //     uri: "",
        //     type: 'image/jpg',
        //     name: 'abc.jpg',
        //   });
    }
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phoneNumber', phoneNumber);
    setRefreshing(true);
    const respone = await UpdateCustomerapi(formData);
    console.log(respone?.data?.data, '========>');
    setRefreshing(false);
    if (respone?.data?.data) {
      await AsyncStorage.setItem('user', JSON.stringify(respone?.data?.data));
      alert('Successfully updated !');
      navigation.replace(Routes.Settings);
    } else {
      alert('Update failed !');
    }
    // }
  };

  return (
    <CustomHeader>
      <ScrollView>
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
            <Image source={{uri: selectphoto}} style={styles.selectedimage} />
          ) : (
            <Image
              source={Logopath.Person}
              style={styles.selectedimage}
            />
          )}

          <TouchableOpacity onPress={() => openGallery()}>
            <Image source={Logopath.CameraImage} style={styles.picicons} />
          </TouchableOpacity>
        </View>

        <View style={styles.input}>
          <Inputcomponents
            placeholder={user.firstName}
            label="First Name"
            value={firstName}
            onChangeText={txt => setFirstName(txt)}
          />
          <Inputcomponents
            placeholder={user.lastName}
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
            placeholder={user.phoneNumber}
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

        {firstName === user?.firstName &&
        lastName === user?.lastName &&
        phoneNumber === user?.phoneNumber&&
        selectphoto === user?.profileImage ? (
          <Buttoncomponent
            disabled={true}
            refreshing={refreshing}
            txtStyle={{color: 'grey'}}
            value={'UPDATE'}
            onPress={() => {
              customervalue();
              // navigation.navigate(Routes.Otpverification);
            }}
          />
        ) : (
          <Buttoncomponent
            refreshing={refreshing}
            value={'UPDATE'}
            onPress={() => {
              customervalue();
              // navigation.navigate(Routes.Otpverification);
            }}
          />
        )}
      </ScrollView>
    </CustomHeader>
  );
};
export default Editprofile;
