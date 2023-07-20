import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import Main from './Main';
import {AuthContextProvider} from './src/context/AuthContext';
import Main from './Main';
import {Auth0Provider} from 'react-native-auth0';
import config from './auth0-configuration';

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Auth0Provider domain={config.domain} clientId={config.clientId}>
          <Main />
        </Auth0Provider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
