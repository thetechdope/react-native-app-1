import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import LinearGradient from 'react-native-linear-gradient'

const Buttoncomponent = ({value}) => {
    return (
        <View>
            <TouchableOpacity >
                <LinearGradient
                    colors={['rgb(123,89,233)', 'rgb(89,79,233)', 'rgb(123,89,233)']}
                    style={styles.btn} >
                    <Text style={styles.txt}>{value}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default Buttoncomponent