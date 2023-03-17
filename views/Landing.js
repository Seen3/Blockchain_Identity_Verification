import { Component } from "react";
import { Button, Text, View } from 'react-native';
class Landing extends Component{
    render(){
    return(
        <View>
            <Text>Welcome To Identity Verification</Text>
            <Text>This Project is a Blockchain Based Project </Text>
            <Text>This is the Landing Page</Text>
            <Button title='Begin'></Button>
        </View>
    )
    }
}
export default Landing;