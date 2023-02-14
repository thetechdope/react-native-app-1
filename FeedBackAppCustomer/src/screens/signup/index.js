import React, { useEffect, useState } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style'
import { Logopath } from '../../assets/images'
import Inputcomponents from '../../components/textinputcomponents'
import Buttoncomponent from '../../components/butoncomponents'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useHeaderHeight } from '@react-navigation/elements';
import { ScrollView } from 'react-native-gesture-handler';
import Commonapi from '../../components/commonapi';



const options = {
  mediaType: "photo"
}


const Signup = () => {

  useEffect(()=>{
    Commonapi();
  },[])
  const headerHeight = useHeaderHeight();
  const [selectphoto, setSelectphoto] = useState("")

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log("result====>", result.assets[0].uri)
    setSelectphoto(result.assets[0].uri)
    // selectphoto.push(result.assets.uri)
  }

  return (

    <KeyboardAvoidingView
    keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex:1}}>
       <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
    
    <View style={styles.maincontainer}>
      <View style={styles.container} >
        <Image
          source={Logopath.LOGINLOGO}
          style={styles.loginlogostyle}
        />
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
            <Image  source={Logopath.CameraImage}/>
            {/* <FontAwesome name="home" size={30} color="#900" /> */}
            </TouchableOpacity>
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
    </View>
      </TouchableWithoutFeedback>
    </ScrollView>
    </KeyboardAvoidingView>
  
  )
}

export default Signup