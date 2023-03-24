// import * as React from "react";
// import { Button } from "react-native-paper";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import CurrentGoalRunning from "../components/currentGoalRunning";
// import CurrentGoalWalking from "../components/currentgoalWalking";
// import CurrentGoalBiking from "../components/currentGoalBiking";
// import MyGoal from "../components/myGoal";
// import BottomTab from "./BottomTab";
// import HeartRate from "../components/heartRate";
// import Temp from "../components/temp";
// import Analtics from "../components/analytics";
// import Bmi from "../components/bmi";

// const Stack = createNativeStackNavigator();

// const GoalStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Goal"
//         component={MyGoal}
//         options={{
//           title: "Add Goal",
//           headerStyle: { backgroundColor: "#fff" },
//           headerTitleStyle: { color: "#000" },
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="Running"
//         component={CurrentGoalRunning}
//         options={{ title: "Running", headerShown: false }}
//       />
//       <Stack.Screen
//         name="Walking"
//         component={CurrentGoalWalking}
//         options={{ title: "Walking", headerShown: false }}
//       />
//       <Stack.Screen
//         name="Biking"
//         component={CurrentGoalBiking}
//         options={{ title: "Biking" ,headerShown:false,}}
//       />
//       <Stack.Screen
//         name="Report"
//         component={Analtics}
//         options={{ title: "Report" ,headerShown:false,}}
//       />
//       <Stack.Screen
//         name="Heart"
//         component={HeartRate}
//         options={{ title: "Heart" ,headerShown:false,}}
//       />
//       <Stack.Screen
//         name="Temp"
//         component={Temp}
//         options={{ title: "Temp" ,headerShown:false,}}
//       />
//       <Stack.Screen
//         name="BMI"
//         component={Bmi}
//         options={{ title: "BMI" ,headerShown:false,}}
//       />
//     </Stack.Navigator>
//   );
// };
// export default GoalStack;
