import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Alert } from 'react-native';
import React from 'react';
import { ContractABI } from "./ContractABI";

import { ContractABI2 } from "./ContractABI";
import Contract from 'web3-eth-contract';

Contract.setProvider('http://10.14.142.181:7545');
let contract = new Contract(
  ContractABI2,
  "0xC8d3482371245b0C4bA6Da4bB061930600D55778"
);
let contract2 = new Contract(
  ContractABI,
  "0xEa52086Db1141D83a615c2ba5B3232152Aa7EA94"
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
    marginBottom: 8,
  },
  buttonDanger: {
    backgroundColor: '#ff7b00',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 'none',
    borderRadius: 4,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
});


function CheckDet({ navigation,route }) {
  const [text, onChangeText] = React.useState('');
  const user=route.params.uname;
  function change() {
    navigation.navigate('Personal Information');
  }
  function check() {
    contract.methods.getDetails(text).send({ from: "0x8A94ee5A61e2AA7a5CDFC864A02BC87212CD9Ba0", gas: 500000 })
      .on('receipt', function (receipt) {
        console.log(receipt);
        let P = receipt.events.PersonReturned.returnValues;
        console.log(P);
      })
      .on('error', function (error) {
        console.error(error);
      });
  }
  function remove() {
    contract.methods.setDetails("", "", "", text).send({ from: "0x8A94ee5A61e2AA7a5CDFC864A02BC87212CD9Ba0", gas: 500000 })
      .then((receipt) => {
        console.log(receipt);
        contract.methods.setPassword(user, "").send({ from:"0x8A94ee5A61e2AA7a5CDFC864A02BC87212CD9Ba0" ,gas:500000})
            .then((receipt) => {
                console.log(receipt);
                Alert.alert('Account Deleted', 'Your details have been removed', [
                  { text: 'Ok', onPress: () => console.log('OK Pressed') },
                ]);
                navigation.navigate('Landing');
              })
            })
            .catch((error) => {
                console.error("Error:",error);
            })
      .catch((error) => {
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
      <TouchableOpacity style={style.buttonDanger} onPress={remove}>
        <Text style={style.buttonText}>Delete Account
        </Text>
      </TouchableOpacity>

    </View>
  );
}
export default CheckDet;