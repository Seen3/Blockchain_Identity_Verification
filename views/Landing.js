import { Component } from "react";
import { Button, Text, View } from 'react-native';


function Landing({ navigation }) {
    const goToSignIn = () => {
      navigation.navigate('UA');
    };
  
    return (
      <View>
            <Text>Welcome To Identity Verification</Text>
            <Text>This Project is a Blockchain Based Project </Text>
            <Text>This is the Landing Page</Text>
            <Button title='Begin' onPress={goToSignIn}></Button>
      </View>
    );
  }
export default Landing;