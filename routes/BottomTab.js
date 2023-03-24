// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MyGoal from "../components/myGoal";
// import CurrentGoalRunning from "../components/currentGoalRunning";
// import HeartRate from "../components/heartRate";
// import Analtics from "../components/analytics";

// import Icon from "react-native-vector-icons/FontAwesome5";
// import GoalStack from "./goalStack";

// const Tab = createBottomTabNavigator();
// const BottomTab = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Goals"
//         component={GoalStack}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="futbol" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Runnings"
//         component={CurrentGoalRunning}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="running" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Analytics"
//         component={Analtics}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="bolt" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomTab;
