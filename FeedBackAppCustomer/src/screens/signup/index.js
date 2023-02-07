import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { Logopath } from '../../assets/images'
import Inputcomponents from '../../components/textinputcomponents'
import Buttoncomponent from '../../components/butoncomponents'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const options = {
  mediaType: "photo"
}


const Signup = () => {

  const [selectphoto, setSelectphoto] = useState("")

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log("result====>", result.assets[0].uri)
    setSelectphoto(result.assets[0].uri)
    // selectphoto.push(result.assets.uri)
  }

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container} >
        <Image
          source={Logopath.LOGINLOGO}
          style={styles.loginlogostyle}
        />
        <View style={styles.pic}>
          
          
        <View > 
          
            <Image
              source={{ uri: selectphoto }}
              style={styles.selectedimage} />
          
          <View style={styles.picicons}>
          <TouchableOpacity
            onPress={() => openGallery()}
            >
            <Image source={Logopath.CameraImage}/>
            {/* <FontAwesome name="home" size={30} color="#900" /> */}
            </TouchableOpacity>
          </View>
        </View>
        </View>
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
            value="CREAT A ACCOUNT"
          />

        </View>


      </View>
    </View>
  )
}

export default Signup