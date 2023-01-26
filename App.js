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
import Settings from './ui/screens/settings';
import AddRubricsScreen from './ui/screens/welcome/add-rubrics-screen';
import GridGlobal from './ui/screens/grid/grid-global';
import GridDay from './ui/screens/grid/grid-day';
import GridSlot from './ui/screens/grid/grid-slot';
import ScheduleToday from './ui/screens/schedule-today';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen} />

                <Stack.Screen
                    name='GridGlobal'
                    component={GridGlobal}
                />
                <Stack.Screen
                    name='GridDay'
                    component={GridDay}
                />
                <Stack.Screen
                    name='GridSlot'
                    component={GridSlot}
                />

                <Stack.Screen
                    name='ScheduleToday'
                    component={ScheduleToday}
                />

                <Stack.Screen
                    name='Settings'
                    component={Settings} />

            </Stack.Navigator>
        </NavigationContainer>)
};

export default App;
