// Imports
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Import Screens
import SelectBody from "../Screens/SelectBody";
import React from "react";
import Human1 from "../Screens/Human1";
import SetUpPet from "../Screens/SetUpPet";

const Stack = createNativeStackNavigator();


export default function DashBoard({navigation}) {
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
                <Stack.Screen name="Human1" component={Human1}/>
                <Stack.Screen name="SetUpPet" component={SetUpPet}/>

            </React.Fragment>

        </Stack.Navigato


    )
}

const styles = StyleSheet.create({});


