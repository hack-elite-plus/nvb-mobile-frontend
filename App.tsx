import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { AuthContextProvider } from "./app/contexts/AuthContext";
import DashboardScreen from "./app/screens/DashboardScreen";
import EmailConfirmationScreen from "./app/screens/EmailConfirmationScreen";
import SignInScreen from "./app/screens/SignInScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

interface AppProps {}

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createNativeStackNavigator();

const screenOptions = {
  title: "",
  headerShadowVisible: false,
  headerShown: false,
};

export default function App(props: AppProps) {
  return (
    <AuthContextProvider>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={screenOptions} />

          <Stack.Screen
            name="EmailConfirmation"
            component={EmailConfirmationScreen}
            options={screenOptions}
          />

          <Stack.Screen name="SignInScreen" component={SignInScreen} options={screenOptions} />
          <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen}
            options={screenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
  },
});
