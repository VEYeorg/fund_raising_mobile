/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/feed/Feed';
import Profile from '../screens/Profile';

import {Color, boxShadow} from '../assets/GlobalStyles';
import FeedDetails from '../screens/feed/FeedDetails';

import {createStackNavigator} from '@react-navigation/stack';

import Favorite from '../screens/feed/Favorite';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="FeedDetails" component={FeedDetails} />
    </Stack.Navigator>
  );
};

export default function MainNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={Color.gray_100}
      inactiveColor={'#333333'}
      barStyle={[
        {
          backgroundColor: Color.white,
        },
        boxShadow,
      ]}>
      <Tab.Screen
        name="Feed"
        component={FeedStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color}) => (
            <Ionicons name="heart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
