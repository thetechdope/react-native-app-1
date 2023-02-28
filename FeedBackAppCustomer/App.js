import {View, Text} from 'react-native';
import React from 'react';
import StackNavigator from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <View style={{flex: 1}}>
          <StackNavigator />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;



