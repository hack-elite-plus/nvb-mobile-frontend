import React from "react";

import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View,TextInput} from 'react-native';
import SelectBody from './Screens/SelectBody';
import Human1 from './Screens/Human1';
import SetUpPet from './Screens/SetUpPet';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BottomNavigation from "./BottomNavigation";

const Stack = createNativeStackNavigator();

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
        flex:1,
    }
});

export default App;