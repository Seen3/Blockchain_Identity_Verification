
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import sha256 from 'js-sha256';
//import Web3 from 'web3'
import { ContractABI } from "./ContractABI";
import Contract from 'web3-eth-contract';

Contract.setProvider('http://10.14.142.148:7545');
let contract=new Contract(
    ContractABI,
    "0x1Adfaa218C94df198a651EB9854228E38E708feb"
);

//const RemixContract = new web3.eth.Contract(
//    ContractABI,
//    "0x521EAe44Ec4187c5623E00548c06Ab1004d74eFa"
//);
//console.log("Remix",RemixContract);


const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#f2f2f2",
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
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
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 4,
        backgroundColor: "#007bff",
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
});


const SignUp = ({ navigation }) => {
    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const goToPI = () => {
        navigation.navigate('Personal Information');
    };
    async function handleSignUp(event) {
        event.preventDefault();
        const user = text;
        //console.log(user);
        const pass = sha256(text2);
        console.log(user, pass);
        //Get contract here
        let gasVal=contract.methods.setPassword(user,pass).estimateGas();
        console.log(gasVal);
        contract.methods.setPassword(user, pass).send({ from:"0x092c74b8E896ba4cbB520D8E17d93A22885c1a6D" ,gas:500000})
            .then((receipt) => {
                console.log(receipt);
            })
            .catch((error) => {
                console.error(error);
            });
        goToPI();
    }
    return (
        <View style={style.container}>
            <Text style={style.text}>Please Enter Details and Create a Password</Text>
            <TextInput
                style={style.input}
                autoComplete="tel-national"
                inputMode={"numeric"}
                onChangeText={onChangeText}
                value={text}
                placeholder={'Phone Number'} />
            <TextInput
                style={style.input}
                onChangeText={onChangeText2}
                secureTextEntry={true}
                value={text2}
                placeholder={'Password'} />
            <TouchableOpacity style={style.button} onPress={handleSignUp}>
                <Text style={style.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )

}
export default SignUp;