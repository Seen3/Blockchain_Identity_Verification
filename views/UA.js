import React from 'react';
import axios from 'axios';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

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
    button:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:4,
        backgroundColor:"#007bff",
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
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
        const pass = text2;
        axios.post(`http://localhost:6699/SignUp`, { user, pass }).then(res => {
            console.log(res);
        })
        await goToPI();
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