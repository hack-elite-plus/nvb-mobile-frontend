import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import BottomNavigation from "./BottomNavigation";


function App () {


    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
            <BottomNavigation/>

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'pink',
        flex: 1,
    }
});

export default App;