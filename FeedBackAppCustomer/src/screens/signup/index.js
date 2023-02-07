import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { Logopath } from '../../assets/images'
import Inputcomponents from '../../components/textinputcomponents'
import Buttoncomponent from '../../components/butoncomponents'


const Signup = () => {
  return (
    <View style={styles.maincontainer}>
     <View style={styles.container} >
        <Image
          source={Logopath.LOGINLOGO}
          style={styles.loginlogostyle}
        />
        <Text style={styles.heading}>Signup</Text>
        <View >

          <Inputcomponents
            placeholder="Business Name"
            label="Business Name"
          />
          <Inputcomponents
            placeholder="Address"
            label="Address"
          />
          <Inputcomponents
            placeholder="Email"
            label="Email"
          />
          <Inputcomponents
            placeholder="Phone No."
            label="Phone No."
          />
          <Inputcomponents
            placeholder="Website URL"
            label="Website URL"
          />
         <Inputcomponents
            placeholder="Password"
            label="Password"
          />
          <Buttoncomponent 
          value= "CREAT A ACCOUNT"
          />

        </View>
        

      </View>
    </View>
  )
}

export default Signup