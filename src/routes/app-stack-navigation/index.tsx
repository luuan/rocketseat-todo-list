import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import TodoList from '../../screens/TodoList';


const Stack = createNativeStackNavigator()

export default function Navigate() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="TodoList" component={TodoList}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}