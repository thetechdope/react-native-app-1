import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Logopath } from '../../assets/images'
import { ROBOTO_LIGHT, ROBOTO_MEDIUM } from "../../assets/fonts"
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Flatlistcomponents({ item,onPress }) {
    console.log("item===>", item)


    return (
        <TouchableOpacity onPress={onPress}>
        <View style={{
            borderWidth:1,
            borderColor:"white",
            padding: 10,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            shadowOffset: { width: -2, height: 8 },
            shadowColor: '#171717',
            shadowOpacity: 0.4,
            shadowRadius: 2,
            margin:4,
            flex:1,
            elevation:1
        }}>
            <View 
            style={{flex:1,flexDirection:'row', justifyContent:'space-between', margin:4}}>
            <Text style={styles.type}>{item.Type}</Text>
            <View  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Image 
            source={Logopath.Redemoji}
            style={{width:30, height:30}}
            />
            <Text>1 day ago</Text>
            </View>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',}}>
            <Image
                source={Logopath.Pizza}
                style={{ height: 50, width: 50, }}
            />
            <Text style={{padding:"2%", flex:1, fontFamily:ROBOTO_LIGHT}}>hello pizza hut this review is 
            given by me you delivered a pizza that is not good .</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    type: {
        margin: 2

    }
})