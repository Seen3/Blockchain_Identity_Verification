import { StyleSheet, TouchableOpacity, Text, View, Image,TextInput, Alert } from 'react-native';
import React from 'react';
import Web3 from 'web3'
import { ContractABI } from "./ContractABI";

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://10.14.142.229:7545"));
web3.eth.defaultAccount = web3.eth.accounts[0];
const RemixContract = new web3.eth.Contract(
    ContractABI,
    "0x3611DE4bd0DAACa71d41BD95609A00E8c5074845"
);


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


  RemixContract.methods.setDetails(name,dob,address,aadhar).send({ from:"0xf595218e8e3AaE625317CfEF5fe3d4E849C02c54",gas:5000 })
            .then((receipt) => {
                console.log(receipt);


                Alert.alert('Checked The database', 'The user is a verified member', [
                  {text: 'OK',},
                ]);
            })
            .catch((error) => {
                console.error(error);
                Alert.alert('Checked The database', 'The user not a member', [
                  {text: 'OK',},
                ]);
            });
    
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