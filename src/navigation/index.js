import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-native/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack =  createNativeStackNavigator();

function AppNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator intialRouteName= 'Welcome' screenOption={{headerShown: false}}>
                <Stack.Screen name= "Home" component={HomeScreen}/>
                <Stack.Screen name= "Welcome" component={WelcomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;