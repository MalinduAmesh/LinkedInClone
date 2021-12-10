import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoadingScreen from './Screens/LoadingScreen'
import SignUp from './Screens/SignUp'
import StartUp from './Screens/StartUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncView from './Screens/AsyncView'
import SignIn from './Screens/SignIn'
import TabNavigator from './Screens/TabNavigator'
import GoogleSignIn from './Screens/GoogleSignIn'

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
          <SafeAreaProvider>
                <NavigationContainer>
                  <Stack.Navigator>
                  {/* <Stack.Screen options={{ headerShown: false }} name="StartUp" component={StartUp}></Stack.Screen>
                  <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp}></Stack.Screen>
                  <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn}></Stack.Screen> */}
                  <Stack.Screen options={{ headerShown: false }} name="TabNavigator" component={TabNavigator}></Stack.Screen>
                 </Stack.Navigator>
                </NavigationContainer>
          </SafeAreaProvider>
    )
  }
}
