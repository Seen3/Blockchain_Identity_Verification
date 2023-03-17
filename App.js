import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
console.log(Stack);

import { Button, StyleSheet, Text, View } from 'react-native';
import Landing from './views/Landing.js'
import UA from './views/UA.js'
import React from 'react';
import PersonalInfo from './views/PersonalInfo.js';
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator styles={styles.container}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="UA" component={UA} />
      <Stack.Screen name="PI" component={PersonalInfo} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
