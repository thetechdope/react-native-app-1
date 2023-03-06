import {View, Text, Button, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/customHeader';
import {Routes} from '../../navigation/Routes';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Flatlistcomponents from '../../components/flatlistcomponets';
import style from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Feedback = ({navigation}) => {
  const [feedback, setFeedback] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUser();
   
  },);

  const getUser = async () => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      setEmail(user.email);
      getUserFeedback();
    } catch (error) {
      alert(error);
    }
  };
  const getUserFeedback = async () => {
    const response = await axios.get(
      `http://34.212.54.70:3000/api/feedbacks/customer/${email}`,
    );
    // console.log("response.data=====>",response)
    setFeedback(response.data);
  };

  return (
    <CustomHeader style={{flex: 1}}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Home)}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.heading}>Feedback</Text>
      </View>
      <View style={{marginTop: '10%', flex: 1}}>
        {feedback.length!==0?
        <FlatList
          data={feedback.reverse()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <Flatlistcomponents
                item={item}
                onPress={() =>
                  navigation.navigate(Routes.GiveFeedback, {item: item})
                }
              />
            );
          }}
        />:
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontWeight:'500', fontSize:18}}>NO Data Found</Text>
        </View>
        }
      </View>
    </CustomHeader>
  );
};

export default Feedback;
