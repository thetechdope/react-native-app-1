import { View, Text, Image,SafeAreaView ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../../components/customHeader'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Logopath } from '../../assets/images'
import styles from './styles'
import { Routes } from '../../navigation/Routes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import GetLocation from 'react-native-get-location'
import axios from 'axios';

const Settings = ({navigation}) => {
const [user , setUser]=useState({});
const [userlocation, setUserlocation]=useState({});
const [currentlocation , setCurrentlocation]=useState({});
  useEffect(() => {
    getlocation()
}, [])

const getlocation=async()=>{
  const result=await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${currentlocation.latitude
}&longitude=${currentlocation.longitude}&localityLanguage=en`)

setUserlocation(result.data)
console.log(result.data)
}

    useEffect(() => {
        getCurrentLocation()
    }, [])

    const getCurrentLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000
        })
            .then(location => {
                setCurrentlocation({...location})
                console.log(location)
            })
            .catch(err => {
                console.log(err)
            })
    }

useEffect(()=>{
    getUser()
  },[])

  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem("user"))
      setUser(userData )     
    } catch (error) {
     console.log(error); 
    }

  };
  return (
    <CustomHeader>
      <View style={styles.topContainer}> 
        <Image style={styles.profileLogo}/>
        <View style={{width:'60%',marginLeft:20}}>
          <Text style={styles.name}>{user?.firstName}</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Ionicons name="location-outline" size={20} />
            <Text>{userlocation?.city },</Text>
            <Text>{userlocation?.countryName}</Text>
          </View>
        </View>
        <TouchableOpacity
        onPress={()=>navigation.navigate(Routes.Editprofile)}
        >
          <Image style={{height:32,width:32}} source={Logopath.Pen}/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.optionsContainer} onPress={()=>navigation.navigate(Routes.Createnewpassword)}>
        <View style={{flexDirection:'row'}}>
          <Image source={Logopath.Lock} style={styles.icon}/>
          <Text>Change Password</Text>
        </View>
        <FontAwesome name='angle-right' size={20} style={{marginRight:15}}/>
      </TouchableOpacity>

      <View style={[styles.optionsContainer,{borderTopWidth:0,borderBottomWidth:0}]}>
        <View style={{flexDirection:'row'}}>
          <Image source={Logopath.delAcc} style={styles.icon}/>
          <Text>Delete Account</Text>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={()=>navigation.replace(Routes.Login)} style={{flexDirection:'row'}}>
          <Image source={Logopath.logout} style={styles.icon}/>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </CustomHeader>
  )
}

export default Settings