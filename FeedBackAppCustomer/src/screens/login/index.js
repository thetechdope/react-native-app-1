import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Routes } from '../../navigation/Routes'
import { useNavigation } from '@react-navigation/native'
import { Logopath } from '../../assets/images'
import style from './style'
import Inputcomponents from '../../components/textinputcomponents'
const Login = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.maincontainer}>

      <View style={styles.container} >
        <Image
          source={Logopath.LOGINLOGO}
          style={styles.loginlogostyle}
        />
        <Text style={styles.heading}>Login</Text>
        <View style={styles.inputstyle}>
          <Inputcomponents
            label="email"
            placeholder="Email"
          />
          <Inputcomponents />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.Home)}
        >
          <Text>Click me</Text>
        </TouchableOpacity>
      </View>
    </View>




  )
}

export default Login