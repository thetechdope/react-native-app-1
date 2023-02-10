import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Flatlistcomponents from '../../components/flatlistcomponets';
import { ROBOTO_BLACK, ROBOTO_LIGHT, ROBOTO_MEDIUM } from '../../assets/fonts';
const {width, height}=  Dimensions.get('window');

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
     
  }


]

export default function Home() {
  return (
    <View>
    <View style={{ height: 166, width: "100%", backgroundColor: '#7E50EE', }}>
        <View style={styles.head}>
          <TouchableOpacity>
            <Icon name="ios-menu-outline" size={30} color="white"  />
          </TouchableOpacity>
          <Text style={styles.heading}>Home</Text>
          </View>
          
      <View style={{
        backgroundColor: 'white',
        position: 'absolute',
        padding: 16,
        width: '90%',
        alignSelf: 'center',
        top: 146,
        borderRadius: 20,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'


      }} >
        <TextInput 
        placeholder='Search here to provie feedbak'
        style={{
          justifyContent: 'center',
          width: '90%',
          fontWeight:'600',
           fontSize:16

        }} />
        <TouchableOpacity>
          <Icon name="search-outline" size={20} />
        </TouchableOpacity>
      </View>
      </View>
      <View style={{marginTop:"15%", justifyContent:'center', alignSelf:'center'}}>
            <Text style={{fontFamily:ROBOTO_LIGHT, fontSize:20}}>Recently Added  Feedback</Text>
          </View>
      <View style={{marginTop:"10%", marginBottom:300}}>
      <FlatList
                data={keyboardTypevalue}
                renderItem={({ item, index }) => {
                    return <Flatlistcomponents item={item} />
                }}

            />
            </View>
    </View>

  )
}

const styles = StyleSheet.create({
head:{

  display:'flex',
  flexDirection:'row',
  justifyContent:'space-around',
  marginTop:'15%',
  width:width*.72,
},
heading:{

  fontSize:25,
  position:'relative',
  justifyContent:'space-evenly',
  alignItems:'center',
  color:'white' 
}
})