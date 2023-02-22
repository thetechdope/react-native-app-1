import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {Logopath} from '../../assets/images';
import {Routes} from '../../navigation/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash() {
  const navigation = useNavigation();

  const getUservalue = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    // console.log(user)
    if (user) {
      setTimeout(() => {
        navigation.replace(Routes.Home);
      }, 4000);
    } else {
      setTimeout(() => {
        navigation.replace(Routes.Login);
      }, 4000);
    }
  };

  useEffect(() => {
    getUservalue();
  }, []);
  return (
    <View style={styles.logostyle}>
      <Image source={Logopath.LOGO} />
    </View>
  );
}
