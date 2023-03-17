import React from 'react';
import axios from 'axios';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const SignUp =({ navigation })=>{
    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const goToPI = () => {
        navigation.navigate('PI');
      };
    async function handleSignUp(event) {
        event.preventDefault();
        const user=text;
        const pass=text2;
        axios.post(`http://localhost:6699/SignUp`,{user,pass}).then(res=>{
            console.log(res);
        })
        await goToPI();
    }
    return(
        <View>
            <Text>Please Enter Details and Create a Password</Text>
            <TextInput
            autoComplete="tel-national"
            inputMode={"numeric"}
            onChangeText={onChangeText}
            value={text}
            placeholder={'Phone Number'} />
            <TextInput
            onChangeText={onChangeText2}
            secureTextEntry={true}
            value={text2}
            placeholder={'Password'} />
            <Button title='Sign Up' onPress={handleSignUp}></Button>
        </View>
    )
    
}
export default SignUp;