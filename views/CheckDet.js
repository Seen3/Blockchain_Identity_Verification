import { StyleSheet, TouchableOpacity, Text, View, Image,TextInput, Alert } from 'react-native';
import React from 'react';
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
    input: {
        width: 300,
        padding: 10,
        marginBottom: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        fontSize: 16,
    },
    button: {
      backgroundColor: '#007bff',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      border: 'none',
      borderRadius: 4,
      marginBottom:8,
    },
    buttonText:{
      fontSize: 20,
      fontWeight: 'bold',
      color:'#fff',
    }
  });

function check(){
    Alert.alert('Checked The database', 'The user is a verified member', [
        {text: 'OK',},
      ]);
}
function CheckDet({ navigation }) {
    const [text, onChangeText] = React.useState('');
    return (
      <View style={style.container}>
        <Text style={style.title}>Welcome</Text>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBHQyR5K7b_diwOFASugKAQ-mENVYs-pctw&usqp=CAU' }}
          style={{ width: 200, height: 130 }} />
        <Text style={style.text}>Time to check fellow users</Text>
        <Text style={style.text}>Enter the aadhar number</Text>
        <TextInput
                style={style.input}
                inputMode={"numeric"}
                onChangeText={onChangeText}
                value={text}
                placeholder={'AADHAR'} />
        <TouchableOpacity style={style.button} onPress={check}>
          <Text style={style.buttonText}>Check for User</Text>
        </TouchableOpacity>
  
      </View>
    );
  }
  export default CheckDet;