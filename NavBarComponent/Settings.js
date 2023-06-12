// Imports
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";

// Import Screens
import Setting from "../Settings/Setting";
import EditProfile from "../Settings/EditProfile";
import Account from "../Settings/Account";

const Stack = createNativeStackNavigator();

export default function DashBoard() {
    return (
        // Stack Navigation between the pages

        <Stack.Navigator
            screenOptions={{
                headerStyled: {
                    backgroundColor: 'transparent'
                },
            }}
            initialRouteName={Setting}
        >
            {/*Define the pages that are in stack navigation*/}

            <React.Fragment>
                <Stack.Screen name="Settings" component={Setting}/>
                <Stack.Screen name="EditProfile" component={EditProfile}/>
                <Stack.Screen name="Account" component={Account}/>


            </React.Fragment>

        </Stack.Navigator>


    )
}

const styles = StyleSheet.create({});



