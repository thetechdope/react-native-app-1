import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from './style';

const Inputcomponents = ({
  label,
  required,
  editable,
  selectTextOnFocus,
  name,
  value,
  placeholder,
  secureTextEntry,
  onChangeText,
  keyboardType,
  customStyle,
  require,
}) => {
  return (
    <SafeAreaView style={customStyle}>
      <View style={styles.container}>
        <Text style={styles.txt}>{label}</Text>
        <TextInput
          name={name}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={styles.Inputvalue}
          editable={editable}
          selectTextOnFocus={selectTextOnFocus}
          required={required}
        />
      </View>
    </SafeAreaView>
  );
};

export default Inputcomponents;
