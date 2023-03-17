import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
const SignUp =()=>{
    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    return(
        <View>
            <Text>Please Details and Create a Password</Text>
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
            <Button title='Sign Up'></Button>
        </View>
    )
    
}
export default SignUp;