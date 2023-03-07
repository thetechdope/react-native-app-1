import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Flatlistcomponents from '../../components/flatlistcomponets';
import {Logopath} from '../../assets/images';
import {Routes} from '../../navigation/Routes';
import styles from './style';
import style from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const [feedback, setFeedback] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [business, setBusiness] = useState([]);

  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  // console.log('feedback.length', feedback.length)
  const getAllFeedbackData = async () => {
    const response = await axios.get('http://34.212.54.70:3000/api/feedbacks');
    setFeedback(response.data);
    //  console.log('responsefeedback==>', response)
  };
  const businesCheck = async () => {
    const respo = await axios.get('http://34.212.54.70:3000/api/businesses');
    // console.log("gfgg===>",respo.data)
    setBusiness(respo.data);
  };

  const handleSearch = searchText => {
    if (searchText) {
      const filterValue = business.filter(item => {
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
    businesCheck();
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
      </View>
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={search}
          onChangeText={searchText => handleSearch(searchText)}
          placeholder="Search here to provie feedbak"
          style={styles.subhead}
        />

        <TouchableOpacity>
          <Icon name="search-outline" size={20} />
        </TouchableOpacity>
      </View>
      {search.length !== 0 ? (
        <View style={styles.flat}>
          { filterData.length==0 ?<Text style={{
            // backgroundColor:'red'
          }}>
            Not matched !
          </Text>:
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={filterData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <Text
                    style={{fontSize: 16, padding: 8}}
                    onPress={() =>
                      navigation.navigate(Routes.GiveFeedback, {item: item})
                    }>
                    {item.businessEmail}
                  </Text>
                );
              }}
            />
          }
        </View>
      ) : null}

      {feedback.length !== 0 ? (
        <>
          <Text style={styles.recently}>Recently Added Feedback</Text>

          <View style={styles.listitem}>
            <FlatList
              data={feedback.reverse()}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <Flatlistcomponents
                    item={item}
                    onPress={() =>
                      // setModalVisible(true)
                      navigation.navigate(Routes.GiveFeedback, {item: item})
                    }
                  />
                );
              }}
            />
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
                  <Text style={styles.modalText}>Hello World!</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
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
