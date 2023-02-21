import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Logopath} from '../../assets/images';
import {ROBOTO_LIGHT, ROBOTO_MEDIUM} from '../../assets/fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from "moment";

export default function Flatlistcomponents({item, onPress}) {
 

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        padding: 10,
        width: '90%',
        alignSelf: 'center',
        margin:6,
        borderRadius: 10,
        shadowOffset: {width: -1, height: 4},
        shadowColor: '#171717',
        shadowOpacity: 0.6,
        shadowRadius: 3,
        borderWidth:.2
        
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.type}>{item.businessEmail}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        {item.rating == 0 ? (
          <Image source={Logopath.Redemoji} style={{width: 30, height: 30}} />
        ) : item.rating == 1 ? (
          <Image source={Logopath.Yellowemoji} style={{height: 30, width: 30}} />
        ) : (
          <Image source={Logopath.Greenemoji} style={{height: 30, width: 30}} />
        )}
          {/* <Text>{moment().utcOffset(`${item.createdAt}`).fromNow()}</Text> */}
          <Text>{moment().diff(moment(new Date(item.createdAt)), "days")}</Text>

        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Image source={Logopath.Pizza} style={{height: 50, width: 50}} />
         
        <Text style={{padding: '2%', flex: 1, fontFamily: ROBOTO_LIGHT}}>
          {item.feedback}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  type: {
    margin: 2,
  },
});
