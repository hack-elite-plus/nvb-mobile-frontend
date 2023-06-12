// Imports
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Import Screens
import SelectBody from "../Screens/SelectBody";
import React from "react";
import SetUpUser from "../Screens/SetUpUser";
import SetUpPet from "../Screens/SetUpPet";



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
            initialRouteName={SelectBody}
        >
            {/*Define the pages that are in stack navigation*/}

            <React.Fragment>
                <Stack.Screen name="SelectUserType" component={SelectBody}/>
                <Stack.Screen name="SetUpUser" component={SetUpUser}/>
                <Stack.Screen name="SetUpPet" component={SetUpPet}/>

            </React.Fragment>

        </Stack.Navigator>


    )
}

const styles = StyleSheet.create({});



