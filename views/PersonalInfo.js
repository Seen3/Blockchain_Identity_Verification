import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View,Alert } from 'react-native';
const PersonalInfo = ({ navigation }) => {
    const [name, onChangeName] = React.useState('');
    const [dob, onChangeDob] = React.useState('');
    const [address, onChangeAddress] = React.useState('');
    const [aadhar, onChangeAadhar] = React.useState('');
    const style = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',

        },
        warning:{
            fontSize:12,
            fontWeight:'bold',
            color:'red',
            fontFamily:'monospace',

        },
        heading: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        input: {
            height: 40,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 10,
            marginBottom: 20,
            width: 300,
        },
        button: {
            backgroundColor: '#007aff',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,

        },
        buttonText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
        }
    });
    function conf(){
        Alert.alert('Registeration Verified', 'You are now registered', [
            {text: '^-^', onPress: () => console.log('OK Pressed')},
          ]);
          navigation.navigate('Landing');
    }
    return (
        <View style={style.container}>
            <Text style={style.heading}>Please Enter Your Details</Text>
            <Text style={style.warning}>You cannot visit this page again</Text>
            <TextInput style={style.input}
                onChangeText={onChangeName}
                value={name}
                placeholder={'Name'} />
            <TextInput style={style.input}
                onChangeText={onChangeDob}
                value={dob}
                placeholder={'Date Of Birth'}
            />
            <TextInput style={style.input}
                onChangeText={onChangeAddress}
                value={address}
                placeholder={'Address'}
            />
            <TextInput style={style.input}
                onChangeText={onChangeAadhar}
                value={aadhar}
                placeholder={'Aadhar Number'}
            />
            <TouchableOpacity style={style.button} onPress={conf}>
                <Text style={style.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    )

}
export default PersonalInfo;