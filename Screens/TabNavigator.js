import React from 'react'
import MyNetwork from './MyNetwork'
import HomeView from './HomeView'
import Post from './Post'
import Job from './Job'
import StackNavigator from './StackNavigator'
import Notification from './Notification'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function HomeScreen(){
<HomeView></HomeView>
}

function MyNetworkScreen(){
<MyNetwork></MyNetwork>
}

function PostScreen(){
<Post></Post>
}

function NotificationScreen(){
<Notification></Notification>
}

function jobsScreen(){
<Job></Job>
}

function TabNavigator() {
    return (
      // <NavigationContainer>

    <Tab.Navigator
     screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
            
          if (route.name === 'HomeView') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-home'
                      : 'ios-home-outline'
                  }
                  size={size}
                  color={color}
                />
                
              );
              
            } else if (route.name === 'MyNetwork') {
              return (
                <FontAwesome5
                  name={focused ? 'user-friends' : 'user-friends'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Post') {
              return (
                <Feather
                  name={focused ? 'plus-square' : 'plus-square'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Notification') {
              return (
                <Ionicons
                  name={focused ? 'notifications-sharp' : 'notifications-sharp'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Job') {
              return (
                <FontAwesome
                  name={focused ? 'shopping-bag' : 'shopping-bag'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}

    >
      <Tab.Screen options={{ headerShown: false }} name="HomeView" component={HomeView} />
      <Tab.Screen options={{ headerShown: false }}  name="MyNetwork" component={MyNetwork} />
      <Tab.Screen options={{ headerShown: false }}  name="Post" component={Post} />
      <Tab.Screen options={{ headerShown: false }}  name="Notification" component={Notification} />
      <Tab.Screen options={{ headerShown: false }}  name="Job" component={Job} />
      <Tab.Screen options={{ headerShown: false }}  name="StackNavigator" component={StackNavigator} />
    </Tab.Navigator>
    /* </NavigationContainer> */
    )
}

export default TabNavigator
