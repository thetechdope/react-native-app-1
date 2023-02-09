import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import CustomHeader from '../../components/customHeader'
import Inputcomponents from '../../components/textinputcomponents'
import Buttoncomponent from '../../components/butoncomponents'
import { Logopath } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../navigation/Routes'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const options = {
  mediaType: "photo"
}


const Editprofile = () => {
  const [selectphoto, setSelectphoto] = useState("")

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log("result====>", result.assets[0].uri)
    setSelectphoto(result.assets[0].uri)
    // selectphoto.push(result.assets.uri)
  }

  const navigation = useNavigation();
  return (
    <CustomHeader>
      <ScrollView>
        <View style={styles.head}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={30}  />
          </TouchableOpacity>
          <Text style={styles.heading}>Edit Profile</Text>
          </View> 
        <View style={styles.pic}>
        {selectphoto?
             <Image
             source={{uri: selectphoto }}
             style={styles.selectedimage} />:
             <Image 
             source={ Logopath.Profiledefault }
             style={styles.selectedimage}
           />
          }
          <View style={styles.picicons}>
            <TouchableOpacity
              onPress={() => openGallery()}
            >
              <Image source={Logopath.CameraImage} />

            </TouchableOpacity>
          </View>
        </View>

        <View >

          <Inputcomponents
            placeholder="First Name"
            label="First Name"
          />
          <Inputcomponents
            placeholder="Last Name"
            label="Last Name"
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
            placeholder="Address"
            label="Address"
          />
        </View>


        <Buttoncomponent
          value={'UPDATE'}


        />
      </ScrollView>
    </CustomHeader>
  )
}
export default Editprofile