import {Image, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Flatlistcomponents from '../../components/flatlistcomponets';
import {Logopath} from '../../assets/images';
import {Routes} from '../../navigation/Routes';
import styles from './style';
import style from './style';
import axios from 'axios';
import Buttoncomponent from '../../components/butoncomponents';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const [feedback, setFeedback] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const getAllFeedbackData = async () => {
    const response = await axios.get('http://34.212.54.70:3000/api/feedbacks');
    setFeedback(response.data);
    setFilterData(response.data);
  };

  const handleSearch = searchText => {
    if (searchText) {
      const filterValue = feedback.filter(item => {
        const itemData = item.businessEmail
          ? item.businessEmail.toUpperCase()
          : ' '.toUpperCase();
        const textData = searchText.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(filterValue);
      setSearch(searchText);
    } else {
      setFilterData(feedback);
      setSearch(searchText);
    }
  };

  useEffect(() => {
    getAllFeedbackData();
    // setModalVisible(true);
  }, []);

  const emailVerification = async () => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      console.log('user============>', user);
      const verified = await axios.patch(
        'http://34.212.54.70:3000/api/customers/verify-email',
        user.email,
      );
    } catch (error) {
      alert(error);
    }
  };
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
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={search}
            onChangeText={searchText => handleSearch(searchText)}
            placeholder="Search here to provie feedbak"
           
            
          />
          <TouchableOpacity>
            <Icon name="search-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <View
            style={{justifyContent: 'center', flex: 1, alignContent: 'center'}}>
            <Image source={Logopath.ForgetPasswordicon} style={styles.img} />
            <Text style={styles.modalText}>Please verify your Email !</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Buttoncomponent
                value={'Yes !'}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  emailVerification();
                }}
              />
              <Buttoncomponent
                value={'No !'}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  alert('Email is not verfied yet !');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      {feedback.length !== 0 ? (
        <>
          <Text style={styles.recently}>Recently Added Feedback</Text>

          <View style={styles.listitem}>
            <FlatList
              data={filterData}
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
