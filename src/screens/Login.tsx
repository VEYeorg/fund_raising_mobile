import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useAuth0} from 'react-native-auth0';

import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../context/AuthContext';

const Login: React.FC = () => {
  const {isLoggedIn, login, logout} = useAuth();

  const {authorize, clearSession, user, getCredentials, error} = useAuth0();

  const handleGoogleLogin = async () => {
    // Handle Google login logic
    await authorize({scope: 'openid profile email'});
    const {accessToken} = await getCredentials();
    Alert.alert('AccessToken: ' + accessToken);
  };

  const handlePhoneNumberSignUp = () => {
    // Handle phone number sign up logic
    login();
  };
  const loggedIn = user !== undefined && user !== null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../assets/images/box_fun.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.WelcomeBox}>
          <Text style={styles.textWelcomeTitle}>
            Doing Good Today Will Be Multiplied In The Future
            {user && <Text>You are logged in as {user.name}</Text>}
          </Text>
          <Text style={styles.textWelcome}>
            Let's set aside just $10 for the people out there who are being hit
            by disaster.
          </Text>
        </View>

        <View style={styles.buttonsPhone}>
          <TouchableOpacity
            style={[styles.signButton, {backgroundColor: '#112E38'}]}
            onPress={handlePhoneNumberSignUp}>
            <Icon
              name="call"
              size={24}
              color="#ffffff"
              style={styles.phoneNumberIcon}
            />
            <Text style={[styles.signText, {color: '#ffffff'}]}>
              Sign Up with Phone Number
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsGoogle}>
          <TouchableOpacity
            style={[styles.signButton, {backgroundColor: '#ffffff'}]}
            onPress={handleGoogleLogin}>
            <Icon
              name="logo-google"
              size={24}
              color="black"
              style={styles.phoneNumberIcon}
            />
            <Text style={styles.signText}>Sign Up with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerImage: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.7,
    marginBottom: 32,
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#202D37',
  },
  WelcomeBox: {
    padding: 26,
  },
  buttonsGoogle: {
    marginHorizontal: 32,
  },
  buttonsPhone: {
    marginHorizontal: 32,
  },
  textWelcomeTitle: {
    alignItems: 'center',
    fontSize: 27,
    lineHeight: 31,

    fontWeight: 'bold',
    color: '#ffffff',
  },
  textWelcome: {
    alignItems: 'center',
    marginTop: 16,
    lineHeight: 21,
    fontSize: 19,
    color: '#ffffff',
  },
  signButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DDDDDD',
    borderRadius: 32,
    marginBottom: 16,
  },
  phoneNumberIcon: {
    marginRight: 12,
  },
  signText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
