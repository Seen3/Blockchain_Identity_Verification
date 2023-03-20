import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Alert  } from 'react-native';
import sha256 from 'js-sha256';
import { ContractABI } from "./ContractABI";
import Contract from 'web3-eth-contract';

Contract.setProvider('http://10.14.142.148:7545');
let contract = new Contract(
    ContractABI,
    "0x1Adfaa218C94df198a651EB9854228E38E708feb"
);

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


const SignIn = ({ navigation }) => {
    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');

    async function handleSignUp(event) {
        event.preventDefault();
        const user = text;
        const pass = sha256(text2);
        console.log(user,pass);
        contract.methods.getPassword(user).send({ from: "0x092c74b8E896ba4cbB520D8E17d93A22885c1a6D", gas: 500000 })
            .on('receipt', function (receipt) {
                let P=receipt.events.PasswordReturned.returnValues.password;
                console.log(P);
                if (P==pass)
                {
                    navigation.navigate('Check Details');
                }
                else{
                    Alert.alert('Invalid Login', 'Please check your number and password', [
                        { text: '\'^\'', onPress: () => console.log('OK Pressed') },
                    ]);
                }
            })
            .on('error', function (error) {
                console.error(error);
            });
        


    }
    return (
        <View style={style.container}>
            <Text style={style.text}>Please Enter Your Phone number and Password</Text>
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
                <Text style={style.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )

}
export default SignIn;