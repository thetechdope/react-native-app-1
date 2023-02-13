import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import CustomHeader from '../../components/customHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Logopath } from '../../assets/images';
import { TextInput } from 'react-native-gesture-handler';
import style from './style';
import Buttoncomponent from '../../components/butoncomponents';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';


const Addfeedback = () => {
  const navigation = useNavigation();
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
            <View style={styles.imgdirection}>
            <Image
            source={Logopath.Redemoji}
            style={styles.img}
            />
           
            <Image  
             source={Logopath.Yellowemoji}
             style={styles.img}
            />
            <Image
             source={Logopath.Greenemoji}
             style={styles.img}
            />
            </View>
            <View style={styles.input}>
            <TextInput 
           style={style.txtinput}
           multiline={true}
            />
            </View>
          </View>
          <View style={styles.btn}>
          <Buttoncomponent
           value={'SUBMIT'} 
           onPress={()=>navigation.replace(Routes.Home)}         
           />
           </View>
  </CustomHeader>
  )
}

export default Addfeedback