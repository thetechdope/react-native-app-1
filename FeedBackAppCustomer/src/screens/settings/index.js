import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Routes } from '../../navigation/Routes'

const Settings = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <TouchableOpacity 
      onPress={()=>navigation.navigate(Routes.Editprofile)}
      >
        <Text>Editprofile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Settings