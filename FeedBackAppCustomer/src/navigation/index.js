import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import * as Screens from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTab from './CustomTab';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Tabnavigators() {
    return (
      <Tab.Navigator
      tabBar={(props) => <CustomTab {...props} />}
            screenOptions={{headerShown:false}}
      >
        <Tab.Screen name={Routes.Home} component={Screens.Home} />
        <Tab.Screen name={Routes.Settings} component={Screens.Settings} />
        
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
      <Stack.Screen name={Routes.Signup} component={Screens.Signup} />
      <Stack.Screen name={Routes.Forgetpassword} component={Screens.Forgetpassword} />
      <Stack.Screen name={Routes.Tab} component={Tabnavigators} />
      
     

    </Stack.Navigator>

  )
}



const styles = StyleSheet.create({})