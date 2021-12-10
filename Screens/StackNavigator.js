import React, { Component } from 'react'
import { Text, View } from 'react-native'
import UserProfile from './UserProfile';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

function UserProfilez(){
    <UserProfile></UserProfile>
    }
    
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
}

export default StackNavigator
