import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Landing from './views/Landing.js'
import UA from './views/UA.js'
import PersonalInfo from './views/PersonalInfo.js';
export default function App() {
  return (
    <View style={styles.container}>
      <PersonalInfo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
