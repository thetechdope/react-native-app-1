import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import {  useNavigation } from '@react-navigation/native';
import styles from './style'
import { Logopath } from '../../assets/images';


export default function Splash() {
    const navigation =useNavigation
    useEffect(()=>{
        setTimeout(() => {
            // navigation.replace()
        }, 4000);
    },[])
  return (
    <View>
     <Image  source={Logopath.LOGO}/>
    </View>
  )
}