import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import About from './screens/About';
import StartingScreen from './screens/StartingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName="Starting">
                <Stack.Screen
                    name="Starting"
                    component={StartingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}
