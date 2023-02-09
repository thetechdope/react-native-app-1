import { View, Text, Image,SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'
import CustomHeader from '../../components/customHeader'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Logopath } from '../../assets/images'
import styles from './styles'
import { Routes } from '../../navigation/Routes'

const Settings = ({navigation}) => {
  return (
    <CustomHeader>
      <View style={styles.topContainer}>
        <Image style={styles.profileLogo}/>
        <View style={{width:'60%',marginLeft:20}}>
          <Text style={styles.name}>Sam Perez</Text>
          <View style={{flexDirection:'row'}}>
          <Ionicons name="location-outline" size={20} />
            <Text>Jakarta, Indonesia</Text>
          </View>
        </View>
        <TouchableOpacity
        onPress={()=>navigation.navigate(Routes.Editprofile)}
        >
          <Image style={{height:32,width:32}} source={Logopath.Pen}/>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <View style={{flexDirection:'row'}}>
          <Image source={Logopath.Lock} style={styles.icon}/>
          <Text>Change Password</Text>
        </View>
        <FontAwesome name='angle-right' size={20} style={{marginRight:15}}/>
      </View>

      <View style={[styles.optionsContainer,{borderTopWidth:0,borderBottomWidth:0}]}>
        <View style={{flexDirection:'row'}}>
          <Image source={Logopath.delAcc} style={styles.icon}/>
          <Text>Delete Account</Text>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <View style={{flexDirection:'row'}}>
          <Image source={Logopath.logout} style={styles.icon}/>
          <Text>Logout</Text>
        </View>
      </View>
    </CustomHeader>
  )
}

export default Settings