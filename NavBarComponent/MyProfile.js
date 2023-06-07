import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

export default function MyProfile({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Profile</Text>
            <Ionicons name="person-outline" size={100} color="#1D8348"/>
            <StatusBar style="auto"/>
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
    text: {
        fontSize: 25,
        color:'#1D8348'
    }
});

