import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
const SignUp =({ navigation })=>{
    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const goToPI = () => {
        navigation.navigate('PI');
      };
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
            <Button title='Sign Up' onPress={goToPI}></Button>
        </View>
    )
    
}
export default SignUp;