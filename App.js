import React from "react";

import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SelectBody from './Screens/SelectBody';
import Human1 from './Screens/Human1';
import SetUpPet from './Screens/SetUpPet';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App= () => {


    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyled: {
                            backgroundColor:'transparent'
                        },
                    }}
                    initialRouteName={SelectBody}
                >
                <React.Fragment>
                    <Stack.Screen name="SelectUserType" component={SelectBody} />
                    <Stack.Screen name="Human1" component={Human1} />
                    <Stack.Screen name="SetUpPet" component={SetUpPet} />

                </React.Fragment>

                </Stack.Navigator>
            </NavigationContainer>

            <StatusBar style="auto" />

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
    }
});

export default App;
