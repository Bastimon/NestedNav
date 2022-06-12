/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Storage} from './storage';
import {HomeTabs} from './views/homeTabs';
import {Rezept} from './views/rezept';
import { RootStackParamList } from './views/props';


const Stack = createNativeStackNavigator<RootStackParamList>();

const storage = new Storage();

function App() {
  storage.init();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rezept Generator 9000" component={HomeTabs} />
        <Stack.Screen name="Rezept" component={Rezept} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
