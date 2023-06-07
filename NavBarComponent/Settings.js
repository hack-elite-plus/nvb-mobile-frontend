import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function Settings() {


    const handle = () => {
    }

    return (
        <View>
            {/*link the pages of the setting features*/}
            <TouchableOpacity onPress={handle}>
                <View style={styles.container}>
                    <Ionicons name="person-circle-outline" size={30} color="#000"/>
                    <Text style={styles.text}>Edit Profile</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handle}>
                <View style={styles.container}>
                    <Ionicons name="key-outline" size={30} color="#000"/>
                    <Text style={styles.text}>Account</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handle}>
                <View style={styles.container}>
                    <Ionicons name="lock-closed-outline" size={30} color="#000"/>
                    <Text style={styles.text}>Privacy</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handle}>

                <View style={styles.container}>
                    <Ionicons name="notifications-outline" size={30} color="#000"/>
                    <Text style={styles.text}>Notifications</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.bottom1}>
                <Text style={styles.bottom2}>Powered By </Text>
                <Text style={styles.bottom2}>Nimbus Venture Band</Text>

            </View>


            <StatusBar style="auto"/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 50,
        marginTop: 50,
    },

    text: {
        fontSize: 20,
        padding: 5,
        marginLeft: 15,

    },
    bottom1: {
        marginTop: 225,

    },
    bottom2:{

        alignSelf:"center",


    }
});

