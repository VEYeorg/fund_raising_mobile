import 'react-native';
import React from 'react';
// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Welcome from '../src/screens/Welcome';

jest.mock('@react-native-firebase/auth'); // Mock the entire @react-native-firebase/auth module

it('renders correctly', () => {
  renderer.create(<Welcome />);
});