import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeScreen} from './homeScreen';
import {ZutatScreen} from './zutatScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#d6bdfa"
      barStyle={{backgroundColor: '#6200ee'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Neue Zutat"
        component={ZutatScreen}
        options={{
          tabBarLabel: 'neue Zutat',
          tabBarIcon: ({color}) => <Icon name="plus" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
