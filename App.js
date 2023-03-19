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
import SignIn from './views/SignIn.js';
import CheckDet from './views/CheckDet.js';
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator styles={styles.container}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Sign Up" component={UA} />
      <Stack.Screen name="Sign In" component={SignIn}/>
      <Stack.Screen name="Personal Information" component={PersonalInfo} />
      <Stack.Screen name="Check Details" component={CheckDet} />
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
