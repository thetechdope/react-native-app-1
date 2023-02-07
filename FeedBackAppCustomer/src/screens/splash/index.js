import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import {  useNavigation } from '@react-navigation/native';
import styles from './style'
import { Logopath } from '../../assets/images';
import { Routes } from '../../navigation/Routes';


export default function Splash() {
    const navigation =useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace(Routes.Login)
        }, 4000);
    },[])
  return (
    <View style={styles.logostyle}>
     <Image  source={Logopath.LOGO}/>
    </View>
  )
}