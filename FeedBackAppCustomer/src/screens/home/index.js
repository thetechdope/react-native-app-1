import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Flatlistcomponents from '../../components/flatlistcomponets';
import {ROBOTO_BLACK, ROBOTO_LIGHT, ROBOTO_MEDIUM} from '../../assets/fonts';
import {Logopath} from '../../assets/images';
const {width, height} = Dimensions.get('window');

const keyboardTypevalue = [
  {
    key: 1,
    Type: 'Pizza Hut',
  },
  {
    key: 2,
    Type: 'Pizza Hut',
  },
  {
    key: 3,
    Type: 'Pizza Hut',
  },
  {
    key: 4,
    Type: 'Pizza Hut',
  },
  {
    key: 5,
    Type: 'Pizza Hut',
  },
  {
    key: 6,
    Type: 'Pizza Hut',
  },
  {
    key: 7,
    Type: 'Pizza Hut',
  },
];

export default function Home() {
  const [recentlyFeedback, setRecentlyFeedback] = useState(false);
  return (
    <View style={{flex: 1}}>
      <View style={{height: 166, width: '100%', backgroundColor: '#7E50EE'}}>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => setRecentlyFeedback(true)}>
            <Icon name="ios-menu-outline" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.heading}>Home</Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            padding: 16,
            width: '90%',
            alignSelf: 'center',
            top: 146,
            borderRadius: 20,
            shadowOffset: {width: -2, height: 4},
            shadowColor: '#171717',
            shadowOpacity: 0.2,
            shadowRadius: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Search here to provie feedbak"
            style={{
              justifyContent: 'center',
              width: '90%',
              fontWeight: '600',
              fontSize: 16,
            }}
          />
          <TouchableOpacity>
            <Icon name="search-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {keyboardTypevalue.length !== 0 ? (
        <>
          <Text
            style={{
              fontFamily: ROBOTO_LIGHT,
              fontSize: 20,
              marginTop: '15%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Recently Added Feedback
          </Text>

          <View style={{marginTop: '10%', flex: 1}}>
            <FlatList
              data={keyboardTypevalue}
              renderItem={({item, index}) => {
                return <Flatlistcomponents item={item} />;
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

const styles = StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '15%',
    width: width * 0.72,
  },
  heading: {
    fontSize: 25,
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
  },
});
