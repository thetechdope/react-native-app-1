import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from './style'

const Inputcomponents = ({ label, value ,placeholder,secureTextEntry,onChangeText, keyboardType}) => {
    return (

            <SafeAreaView>

                <TextInput
                    label={label}
                    value={value}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    style={styles.Inputvalue}

                />
            </SafeAreaView>

    )
}

export default Inputcomponents

