import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
const PersonalInfo =()=>{
    const [name, onChangeName] = React.useState('');
    const [dob, onChangeDob] = React.useState('');
    const [address, onChangeAddress] = React.useState('');
    const [aadhar, onChangeAadhar] = React.useState('');
    return(
        <View>
            <Text>Please Enter Your Details</Text>
            <TextInput
            onChangeText={onChangeName}
            value={name}
            placeholder={'Name'} />
            <TextInput
            onChangeText={onChangeDob}
            value={dob}
            placeholder={'Date Of Birth'}
            />
            <TextInput
            onChangeText={onChangeAddress}
            value={address}
            placeholder={'Date Of Birth'}
            />
            <TextInput
            onChangeText={onChangeAadhar}
            value={aadhar}
            placeholder={'Aadhar Number'}
            />
            <Button title='Confirm'></Button>
        </View>
    )
    
}
export default PersonalInfo;