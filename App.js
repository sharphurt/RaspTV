/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import FinishWelcomeScreen from './ui/screens/welcome/finish-welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IpSettingsScreen from './ui/screens/welcome/ip-settings';
import SourceSettingsScreen from './ui/screens/welcome/sources-settings';
import HomeScreen from './ui/screens/home';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='WelcomeIpSettings'
                    component={IpSettingsScreen}
                />
                <Stack.Screen
                    name='WelcomeSourceSettings'
                    component={SourceSettingsScreen}
                />
                <Stack.Screen
                    name='WelcomeFinishSettings'
                    component={FinishWelcomeScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>)
};

export default App;
