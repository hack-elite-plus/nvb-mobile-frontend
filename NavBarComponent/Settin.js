// Imports
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";

// Import Screens
import Setting from "../Settings/Setting";
import EditProfile from "../Settings/EditProfile";
import Account from "../Settings/Account";
import SelectEditUser from "../Settings/SelectEditUser";
import EditPetProfile from "../Settings/EditPetProfile";
import SelectDisplay from "../Settings/SelectDisplayAccount";
import AccountPet from "../Settings/AccountPet";

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
                <Stack.Screen name="Settings" component={Setting} options={{headerShown:false}}/>
                <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
                <Stack.Screen name="Account" component={Account} options={{headerShown:false}}/>
                <Stack.Screen name="SelectEditUser" component={SelectEditUser} options={{headerShown:false}}/>
                <Stack.Screen name="EditPetProfile" component={EditPetProfile} options={{headerShown:false}}/>
                <Stack.Screen name="SelectDisplay" component={SelectDisplay} options={{headerShown:false}}/>
                <Stack.Screen name="AccountPet" component={AccountPet} options={{headerShown:false}}/>



            </React.Fragment>

        </Stack.Navigator>


    )
}

const styles = StyleSheet.create({});



