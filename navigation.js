import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import ItemPage from './screens/ItemPage';

export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ItemPage" component={ItemPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}