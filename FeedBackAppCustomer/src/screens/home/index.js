import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Flatlistcomponents from '../../components/flatlistcomponets';
import {Logopath} from '../../assets/images';
import {Routes} from '../../navigation/Routes';
import styles from './style';
import style from './style';
import axios from 'axios';

export default function Home({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const [feedback, setFeedback] = useState([]);

  const getAllFeedbackData = async () => {
    const response = await axios.get('http://34.212.54.70:3000/api/feedbacks');
    setFeedback(response.data);
  };

  useEffect(() => {
    getAllFeedbackData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={style.header}>
        <View style={styles.head}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.Settings)}>
            <Icon name="ios-menu-outline" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.heading}>Home</Text>
        </View>

        <View style={styles.subhead}>
          <TextInput
            placeholder="Search here to provie feedbak"
            style={style.input}
          />
          <TouchableOpacity>
            <Icon name="search-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {feedback.length !== 0 ? (
        <>
          <Text style={styles.recently}>Recently Added Feedback</Text>

          <View style={{flex: 1, marginTop: '10%'}}>
            <FlatList
              data={feedback}
              keyExtractor={(item, index) => index.key}
              renderItem={({item, index}) => {
                return (
                  <Flatlistcomponents
                    item={item}
                    onPress={() => navigation.navigate(Routes.GiveFeedback)}
                  />
                );
              }}
            />
          </View>
        </>
      ) : (
        <View style={{alignItems: 'center'}}>
          <Image style={{marginTop: '20%'}} source={Logopath.Homeimage} />
          <Text>Search here to Provide Feedback</Text>
        </View>
      )}
    </View>
  );
}
