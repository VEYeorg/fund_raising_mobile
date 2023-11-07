import React ,{useEffect}from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Color, ColorAPP} from '../assets/GlobalStyles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import TextComponent from '../component/atom/CustomText';

const Welcome: React.FC = () => {
  const [visible] = React.useState(true);

  async function onAuthStateChanged(user_data: any) {
    if (user_data) {
      try {
        const {uid} = user_data;
        console.log('user_data', user_data);
        // save user if exist
     
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../assets/images/funding.jpg')}
          style={styles.logo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.WelcomeBox}>
        
          <TextComponent style={{
            fontSize: 21, 
            fontFamily:'Skranji-Bold'
          }}>
              Skranji-Regular An nou ede yo pou yo ka jwenn yon ti kichoy pou yo ka viv.
          </TextComponent>
      
        </View>

        <View style={styles.buttonsGoogle}>
          <TouchableOpacity
            style={[styles.signButton, {backgroundColor: '#ffffff'}]}
          >
            <Icon
              name="logo-google"
              size={24}
              color="black"
              style={styles.phoneNumberIcon}
            />
            <TextComponent style={styles.signText}>
              {' '}
                Klike pou w komanse itilize l{' '}
            </TextComponent>
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.2,
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.blue,
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
    fontFamily: 'Kenia-Regular',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 31,
    fontStyle: 'normal',

  },

  textWelcome: {
    alignItems: 'center',
    fontSize: 19,


    fontFamily: 'Montserrat-Regular',
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
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default Welcome;
