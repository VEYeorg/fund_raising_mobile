import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import Main from './Main';
import {AuthContextProvider} from './src/context/AuthContext';
import Main from './Main';
import {Auth0Provider} from 'react-native-auth0';
import config from './auth0-configuration';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Auth0Provider domain={config.domain} clientId={config.clientId}>
          <StatusBar
            backgroundColor="#fff" // Set the background color of the status bar
            barStyle="dark-content" // Set the color of the status bar content (dark or light)
          />
          <Main />
        </Auth0Provider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
