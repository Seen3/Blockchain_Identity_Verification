
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import sha256 from 'js-sha256';
import Web3 from 'web3'
import { ContractABI } from "./ContractABI";

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://10.14.142.229:7545"));
web3.eth.defaultAccount = web3.eth.accounts[0];
const RemixContract = new web3.eth.Contract(
    ContractABI,
    "0x3611DE4bd0DAACa71d41BD95609A00E8c5074845"
);
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
        const pass = sha256(user);
        console.log(user, pass);
        //Get contract here
        RemixContract.methods.setPassword(user, pass).send({ from:"0xf595218e8e3AaE625317CfEF5fe3d4E849C02c54",gas:500 })
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