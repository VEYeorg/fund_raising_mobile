/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/feed/Feed';
import Profile from '../screens/Profile';

import Build from '../screens/Build';
import {Color, boxShadow} from '../assets/GlobalStyles';
import FeedDetails from '../screens/feed/FeedDetails';

const Tab = createMaterialBottomTabNavigator();

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
        name="Feed1"
        component={Build}
        options={{
          tabBarLabel: 'Feed 1',
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Feed"
        component={FeedDetails}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Feed}
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
