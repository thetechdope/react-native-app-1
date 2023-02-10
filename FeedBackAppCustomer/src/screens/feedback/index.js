import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/customHeader'
import { Routes } from '../../navigation/Routes'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Flatlistcomponents from '../../components/flatlistcomponets'


const keyboardTypevalue = [
  {
      key: 1,
      Type: 'Pizza Hut',


  },
  {
      key: 2,
      Type: 'Pizza Hut',
     

  },
  {
      key: 3,
      Type: 'Pizza Hut', 
    
  },
  {
      key: 4,
      Type: 'Pizza Hut',
    
  },
  {
      key: 5,
      Type: 'Pizza Hut',
      
  },
  {
      key: 6,
      Type: 'Pizza Hut',
      
  },
  {
      key: 7,
      Type: 'Pizza Hut',
     
  }


]

const Feedback = ({navigation}) => {
  return (
    <CustomHeader>
      
      <View style={styles.head}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={30}  />
          </TouchableOpacity>
          <Text style={styles.heading}>Feedback</Text>
          </View> 
          <View style={{marginTop:"10%", }}>
            
      <FlatList
                data={keyboardTypevalue}
                renderItem={({ item, index }) => {
                    return <Flatlistcomponents item={item} onPress={()=>navigation.navigate(Routes.GiveFeedback)} />
                }}

            />
            </View>
    </CustomHeader>
  )
}

export default Feedback