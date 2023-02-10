import { View, Text, Button } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/customHeader'
import { Routes } from '../../navigation/Routes'

const Feedback = ({navigation}) => {
  return (
    <CustomHeader>
      <Button title='Press' onPress={()=>navigation.navigate(Routes.GiveFeedback)} />
    </CustomHeader>
  )
}

export default Feedback