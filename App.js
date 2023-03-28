import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Running from './screens/Running';
import EmergancyPerson from './screens/emegacyPerson';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Activity" component={HomeScreen}
            options={{ headerTitleAlign: 'center', headerShown:true}} />
          <Stack.Screen name="Running" component={Running}
            options={{ headerTitleAlign: 'center'}} />
            <Stack.Screen name="EmgPerson" component={EmergancyPerson}
            options={{ headerTitleAlign: 'center', headerShown:true}} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}


