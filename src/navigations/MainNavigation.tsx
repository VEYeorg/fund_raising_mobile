/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/feed/Feed';

import {Color, boxShadow} from '../assets/GlobalStyles';
import FeedDetails from '../screens/feed/FeedDetails';

import {createStackNavigator} from '@react-navigation/stack';

import Favorite from '../screens/feed/Favorite';
import PaymentForm from '../screens/feed/PaymentForm';
import Profile from '../screens/Profile';
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
      <Stack.Screen name="PaymentForm" component={PaymentForm} />
    </Stack.Navigator>
  );
};

export default function MainNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={Color.secondary}
      inactiveColor={'#333333'}
      barStyle={[
        {
          backgroundColor: Color.white,
          borderTopWidth: 1,
          borderTopColor: '#E9E9E9',
        },
        boxShadow,
      ]}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          // Choose the icon based on the active state (focused or not)

          if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={color}
                size={26}
              />
            );
          }
          if (route.name === 'Favorite') {
            return (
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                color={color}
                size={26}
              />
            );
          }
          if (route.name === 'Profile') {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                color={color}
                size={26}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={FeedStack} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
