import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import CustomHeader from '../../components/customHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Logopath } from '../../assets/images';
import { TextInput } from 'react-native-gesture-handler';
import Buttoncomponent from '../../components/butoncomponents';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import CheckBox from '@react-native-community/checkbox';
import style from './style';
import Customeraddfeedbackapi from '../../components/customeraddfeedbackapi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const Addfeedback = ({
  navigation,
  route: {
    params: { item },
  },
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');
  const [customerEmail, setCustomeremail] = useState('');
  const [businessEmail, setBusineesEmail] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selected, setSelected] = useState('')

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    if (item.businessEmail) {
      setBusineesEmail(item.businessEmail);
    }
  }, [item]);

  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem('user'));
      setCustomeremail(userData.email);
    } catch (error) {
      console.log(error);
    }
  };

  const addFeedbacknow = async () => {
    let parm = {
      rating: rating,
      feedback: feedback,
      customerEmail: customerEmail,
      businessEmail: businessEmail,
    };

    if (!rating || !feedback) {
      alert('please enter details');
    } else {
      const feedbackvalue = await Customeraddfeedbackapi(parm, toggleCheckBox);
     if(feedbackvalue.status==false){
      alert("Business Email Is Deactivated")
     }else{
      setModalVisible(true);
     }
      
    }



  };

  return (
    <CustomHeader>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.replace(Routes.Home)}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.heading}>Give Feedback</Text>
      </View>
      <View>
        <Text style={styles.txthead}>{item.businessEmail}</Text>
        <Text style={styles.txt}>How did we do ?</Text>
        <View style={styles.imgdirection}>
          <TouchableOpacity onPress={() => {
            setRating('0')
            setSelected('red')
<<<<<<< HEAD
            }}>
            {selected=='red'?
            <Image source={Logopath.Redemoji} style={{height:90,width:90}} />:
            <Image source={Logopath.Redemoji} style={styles.imgemoji} />
=======
          }}>
            {selected == 'red' ?
              <Image source={Logopath.Redemoji} style={{ height: 85, width: 85 }} /> :
              <Image source={Logopath.Redemoji} style={styles.imgemoji} />
>>>>>>> 56739d7 (android debigging)
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setSelected('yellow')
<<<<<<< HEAD
             setRating('1')}}>
            {selected=='yellow'?
            <Image source={Logopath.Yellowemoji} style={{height:90,width:90}} />:
            <Image source={Logopath.Yellowemoji} style={styles.imgemoji} />
=======
            setRating('1')
          }}>
            {selected == 'yellow' ?
              <Image source={Logopath.Yellowemoji} style={{ height: 85, width: 85 }} /> :
              <Image source={Logopath.Yellowemoji} style={styles.imgemoji} />
>>>>>>> 56739d7 (android debigging)
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setSelected('green')
<<<<<<< HEAD
             setRating('2')}}>
            {selected=='green'?
            <Image source={Logopath.Greenemoji} style={{height:90,width:90}} />:
            <Image source={Logopath.Greenemoji} style={styles.imgemoji} />
=======
            setRating('2')
          }}>
            {selected == 'green' ?
              <Image source={Logopath.Greenemoji} style={{ height: 85, width: 85 }} /> :
              <Image source={Logopath.Greenemoji} style={styles.imgemoji} />
>>>>>>> 56739d7 (android debigging)
            }
          </TouchableOpacity>
        </View>
        <TextInput
          value={feedback}
          onChangeText={txt => setFeedback(txt)}
          multiline={true}
          style={styles.input}
        />
      </View>
      <View style={style.checkbox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          boxType={'square'}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          textvalue="Anonymous"
          style={{ height: 20, width: 20, margin: 4 }}
        />
        <Text style={{ justifyContent: 'center' }}>Anonymous</Text>
      </View>

      {/* <Modal animationType="slide"  visible={modalVisible} >
        <View style={styles.modalView}>
          <View
            >
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/01/43/05/40/360_F_143054058_n39HtIYBeWuxnjmIUCbMrGxShtm2rNyV.jpg',
              }}
              style={styles.img}
            />
            <Text style={styles.modalText}>Thank you!</Text>
            <Text style={styles.modalTex}>
              Thank you for sharing your thoughts
            </Text>
<<<<<<< HEAD
            <Text style={styles.modalTex}> we appreciate your feedback</Text>
            <Buttoncomponent
              value={'OK'}
              onPress={() => {
                setModalVisible(!modalVisible)
                // navigation.replace(Routes.Home)
=======
            <Text style={styles.modalTex}> we  appreciate your feedback</Text>
           
          </View>
          <View style={{width:'40%'}}>
          <Buttoncomponent
              value={'OK'}
              onPress={() => {
                setModalVisible(!modalVisible)
               navigation.navigate(Routes.Home) 
               

>>>>>>> 56739d7 (android debigging)
              }}
            />
             </View>
        </View>
      </Modal> */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={{
                  uri: 'https://t3.ftcdn.net/jpg/01/43/05/40/360_F_143054058_n39HtIYBeWuxnjmIUCbMrGxShtm2rNyV.jpg',
                }}
                style={styles.img}
              />
              <Text style={styles.modalText}>Thank you!</Text>
              <Text style={styles.modalTex}>
                Thank you for sharing your thoughts
              </Text>
              <Text style={styles.modalTex}> we  appreciate your feedback</Text>

              <TouchableOpacity 
              onPress={()=>{
                setModalVisible(!modalVisible)
                 navigation.replace(Routes.Feedback)
              }}
              >
                <LinearGradient colors={['#7E50EE', '#5928E5']} style={{
                  alignItems: 'center',
                  width: responsiveWidth(75),
                  alignSelf: 'center',
                  margin: responsiveWidth(5),
                  padding: responsiveWidth(5),
                  borderRadius: responsiveWidth(10),
                }}>
    
                  <Text style={{
                    fontWeight: 'bold',
                    color: 'white',
                  }}>OK</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>





          </View>
        </Modal>
      </View>
      <View style={styles.btn}>
        <Buttoncomponent
          value={'SUBMIT'}
          onPress={() => {
            addFeedbacknow();
           
          }}
        />
      </View>
    </CustomHeader>
  );
};

export default Addfeedback;
