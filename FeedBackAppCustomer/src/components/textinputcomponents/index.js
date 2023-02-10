import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from './style'

const Inputcomponents = ({ label, value ,placeholder,secureTextEntry,onChangeText, keyboardType,customStyle}) => {
    return (

            <SafeAreaView style={customStyle}>
                
               <View style={styles.container}>
                <Text style={styles.txt}>{label}</Text>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    style={styles.Inputvalue}

                />
                </View>
            </SafeAreaView>

    )
}

export default Inputcomponents

