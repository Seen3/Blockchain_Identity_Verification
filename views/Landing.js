import { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#333",
    marginBottom: 20,
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 'none',
    borderRadius: 4,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff',
  }
});


function Landing({ navigation }) {
  const goToSignIn = () => {
    navigation.navigate('UA');
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Welcome To Identity Verification</Text>
      <Image source={{ uri: 'https://pmmodiyojana.in/wp-content/uploads/2022/08/image-170-1024x683.png' }}
        style={{ width: 350, height: 350 }} />
      <Text style={style.text}>This Project is a Blockchain Based Project </Text>
      <Text style={style.text}>This is the Landing Page</Text>
      <TouchableOpacity style={style.button} onPress={goToSignIn}>
        <Text style={style.buttonText}>Begin</Text>
      </TouchableOpacity>

    </View>
  );
}
export default Landing;