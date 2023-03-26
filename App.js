import React from "react";
import { View } from "react-native";
import Bmi from "./Screens/bmi";
import HeartRate from "./Screens/heartRate";
import MyGoal from "./Screens/myGoal";
import Temp from "./Screens/temp";
import Navigator from "./routes/goalStack";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CurrentGoalRunning from "./Screens/currentGoalRunning";
import CurrentGoalBiking from "./Screens/currentGoalBiking";
import CurrentGoalWalking from "./Screens/currentgoalWalking";
// import BottomTab from "./routes/BottomTab";
// import GoalStack from "./routes/goalStack";
import Analtics from "./Screens/analytics";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useNavigation } from "@react-navigation/native";
// const Stack=createNativeStackNavigator();

const Stack = createNativeStackNavigator();
const Stack2=createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Goals"
        component={GoalStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="futbol" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Runnings"
        component={CurrentGoalRunning}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Running", { input: "" })}
            >
              <View>
                <Icon name="running" color="grey" size={30} />
              </View>
            </TouchableOpacity>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Analytics"
        component={AnalticStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="bolt" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const GoalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Goal"
        component={MyGoal}
        options={{
          title: "Add Goal",
          headerStyle: { backgroundColor: "#fff" },
          headerTitleStyle: { color: "#000" },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Running"
        component={CurrentGoalRunning}
        options={{ title: "Running", headerShown: false }}
      />

      <Stack.Screen
        name="Walking"
        component={CurrentGoalWalking}
        options={{ title: "Walking", headerShown: false }}
      />
      <Stack.Screen
        name="Biking"
        component={CurrentGoalBiking}
        options={{ title: "Biking", headerShown: false }}
      />
      {/* <Stack.Screen
        name="Report"
        component={Analtics}
        options={{ title: "Report", headerShown: false }}
      />
      <Stack.Screen
        name="Heart"
        component={HeartRate}
        options={{ title: "Heart", headerShown: false }}
      />
      <Stack.Screen
        name="Temp"
        component={Temp}
        options={{ title: "Temp", headerShown: false }}
      />
      <Stack.Screen
        name="BMI"
        component={Bmi}
        options={{ title: "BMI", headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};
const AnalticStack = () => {
  return(
    <Stack.Navigator>
    <Stack.Screen
      name="Report"
      component={Analtics}
      options={{ title: "Report", headerShown: false }}
    />
    <Stack.Screen
      name="Heart"
      component={HeartRate}
      options={{ title: "Heart", headerShown: false }}
    />
    <Stack.Screen
      name="Temp"
      component={Temp}
      options={{ title: "Temp", headerShown: false }}
    />
    <Stack.Screen
      name="BMI"
      component={Bmi}
      options={{ title: "BMI", headerShown: false }}
    />
  </Stack.Navigator>
  );
 
};
const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
