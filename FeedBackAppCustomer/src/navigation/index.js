import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import * as Screens from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTab from './CustomTab';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Tabavigators() {
    return (
      <Tab.Navigator
      tabBar={(props) => <CustomTab {...props} />}
            screenOptions={{headerShown:false}}
      >
        <Tab.Screen name={Routes.Home} component={Screens.Home} />
        
      </Tab.Navigator>
    );
  }
export default function StackNavigator() {
  return (

    <Stack.Navigator 
    screenOptions={{
     headerShown:false
    }} >
      <Stack.Screen name={Routes.Splash} component={Screens.Splash} />
      <Stack.Screen name={Routes.Login} component={Screens.Login} />
      <Stack.Screen name={Routes.Home} component={Tabavigators} />
      
     

    </Stack.Navigator>

  )
}



const styles = StyleSheet.create({})