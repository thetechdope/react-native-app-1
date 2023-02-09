import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Routes } from '../../navigation/Routes'
import { useNavigation } from '@react-navigation/native'
import { Logopath } from '../../assets/images'
import style from './style'
import Inputcomponents from '../../components/textinputcomponents'
import Buttoncomponent from '../../components/butoncomponents'
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
            placeholder="Email"
            label="Email"
          />
          <Inputcomponents
            placeholder="password"
            label="Password"
          />
         
          <Buttoncomponent 
          value="SIGN IN"
          onPress={()=>navigation.navigate(Routes.Home)}
          />

        </View>
        <View style={styles.choice}>
          <TouchableOpacity

            onPress={() => navigation.navigate(Routes.Signup)}
          >
            
            <Text style={styles.choicetxt}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.Forgetpassword)}
          >
            <Text style={styles.choicetxt}>Forget Password</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>




  )
}

export default Login