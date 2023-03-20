import { StyleSheet, TouchableOpacity, Text, View, Image,TextInput, Alert } from 'react-native';
import React from 'react';
import { ContractABI } from "./ContractABI";

import { ContractABI2 } from "./ContractABI";
import Contract from 'web3-eth-contract';

Contract.setProvider('http://10.14.142.148:7545');
let contract=new Contract(
    ContractABI2,
    "0x1Adfaa218C94df198a651EB9854228E38E708feb"
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


function CheckDet({ navigation }) {
    const [text, onChangeText] = React.useState('');
    function change(){
      navigation.navigate('Personal Information');
    }
    function check(){
      contract.methods.getDetails(text).send({ from: "0x092c74b8E896ba4cbB520D8E17d93A22885c1a6D", gas: 500000 })
            .on('receipt', function (receipt) {
              console.log(receipt);
                let P=receipt.events.PersonReturned.returnValues;
                console.log(P);
            })
            .on('error', function (error) {
                console.error(error);
            });
    }
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
        <TouchableOpacity style={style.button} onPress={change}>
          <Text style={style.buttonText}>Change your details</Text>
        </TouchableOpacity>
  
      </View>
    );
  }
  export default CheckDet;