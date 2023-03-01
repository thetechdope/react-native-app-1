import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const Buttoncomponent = ({value, onPress,refreshing}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={['#7E50EE', '#5928E5']} style={styles.btn}>
        {refreshing ?
                  <ActivityIndicator size="small" color="#0000ff" />:
                
          <Text style={styles.txt}>{value}</Text>}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Buttoncomponent;
