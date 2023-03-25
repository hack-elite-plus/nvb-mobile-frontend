import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SelectBody from './Screens/SelectBody';
import Human1 from './Screens/Human1';
import SetUpPet from './Screens/SetUpPet';



export default function App() {
  

  return (
    <View style={styles.container}>
      <Human1/>

      <StatusBar style="auto" />

    </View>
  )
}

const styles = StyleSheet.create ({
 

});

