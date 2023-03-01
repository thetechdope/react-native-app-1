import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Logopath} from '../../assets/images';
import {ROBOTO_LIGHT, ROBOTO_MEDIUM} from '../../assets/fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Flatlistcomponents({item, onPress}) {
  console.log('itemHom==>',item)
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        padding: responsiveWidth(2.5),
        width: responsiveWidth(90),
        alignSelf: 'center',
        margin:responsiveWidth(1.3),
        borderRadius: responsiveWidth(4),
        shadowOffset: {width: responsiveWidth(-2), height: responsiveHeight(1)},
        shadowColor: '#171717',
        shadowOpacity: 0.4,
        shadowRadius: 3,
        borderWidth: 0.2,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
        <Text style={styles.type}>{item.businessEmail}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {item.rating == 0 ? (
            <Image source={Logopath.Redemoji} style={{width: responsiveWidth(8), height: responsiveHeight(5), resizeMode:'contain'}} />
          ) : item.rating == 1 ? (
            <Image
              source={Logopath.Yellowemoji}
              style={{width: responsiveWidth(8), height: responsiveHeight(5), resizeMode:'contain'}}
            />
          ) : (
            <Image
              source={Logopath.Greenemoji}
              style={{width: responsiveWidth(8), height: responsiveHeight(5), resizeMode:'contain'}}
            />
          )}
          <Text>{moment(new Date(parseInt(item.createdAt))).fromNow()}</Text>
          {/* <Text>{moment().diff(moment(new Date(item.createdAt)), "days")}</Text> */}
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center',}}>
        {item?.businessImage!=='' ? 
        <Image source={{uri:item.businessImage}} style={{height: responsiveWidth(12), width: responsiveWidth(12), borderRadius:responsiveWidth(6), resizeMode:'cover'}} />:
        <Image source={Logopath.Person} style={{height: responsiveWidth(12), width: responsiveWidth(12), borderRadius:responsiveWidth(6), resizeMode:'cover'}} />
        }

        <Text style={{marginLeft:responsiveWidth(4), flex: 1, fontFamily: ROBOTO_LIGHT}}>
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
