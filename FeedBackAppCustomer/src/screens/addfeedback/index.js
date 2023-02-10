import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import CustomHeader from '../../components/customHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Addfeedback = () => {
  return (
  <CustomHeader>
    <View style={styles.head}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={30}  />
          </TouchableOpacity>
          <Text style={styles.heading}>Give Feedback</Text>
          </View> 
          <View>
            <Text style={styles.txthead}>Mcdonald's Pizza</Text>
            <Text style={styles.txt}>How did we do ?</Text>
          </View>
  </CustomHeader>
  )
}

export default Addfeedback