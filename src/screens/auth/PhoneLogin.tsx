import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Alert,
  Modal,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../../context/AuthContext';
import firestore from '@react-native-firebase/firestore';
import PhoneInput from 'react-native-phone-number-input';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import TextComponent from '../../component/atom/CustomText';
import {Color} from '../../assets/GlobalStyles';
import withLoadingModal from '../../component/HOC/Loading';
import { useLang } from '../../context/LanguageContext';
import messaging from '@react-native-firebase/messaging';

const CELL_COUNT = 6;

const PhoneLogin: React.FC = ({navigation,setLoading}:any) => {
  
  navigation.setOptions({
    headerShown: false,
  });

  const {lang} = useLang();
  const {login, handleSetUser, user} = useAuth();

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [value, setValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const [formattedValue, setFormattedValue] = useState('');

  // Handle Login
  const [valueConfirm, setValueConfirm] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  async function onAuthStateChanged(user_data: any) {

    setLoading(false);

    if (user_data) {

      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();

      try {

        const {uid, phoneNumber} = user_data;

        const objUser = {
          id: uid,
          phone: phoneNumber,
          token: token,
        };

        // Save user if exist
        const userExist = await firestore().collection('users').doc(uid).get();

        if (!userExist.exists) {

          await firestore().collection('users').doc(uid).set(objUser);
          handleSetUser(objUser);
          
        } else {

          let dToken = {
            ...userExist?.data(),
            token: token
          }
            
          handleSetUser(dToken);
        }
        login();
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber() {
    try {
      setLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(formattedValue);
      setConfirm(confirmation);
    } catch (error) {
      Alert.alert(
        lang?.error ,
        lang?.error_send_code,
      );
    } finally {
      setLoading(false);
    }
  }

  async function confirmCode() {
    try {
      setLoading(true);
      await confirm.confirm(valueConfirm);
      Alert.alert(lang?.success, 
        lang.sucess_login_message
        , [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]);
    } catch (error) {
      Alert.alert(
        lang?.error,
        lang?.error_code_enter,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal animationType="slide" transparent={true}>
      <SafeAreaView style={styles.container}>
        {!confirm ? (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[
                styles.signButton,
                {
                  width:120,
                  backgroundColor:'transparent',
                  marginTop: 40,
                  marginLeft: Dimensions.get('window').width -140,
                },
              ]}
              onPress={() => navigation.goBack()}>
              <Icon
                name="close"
                size={24}
                color= {Color.secondary}
                style={[styles.phoneNumberIcon]}
              />
              <TextComponent style={[styles.signText,{
                color: Color.secondary,        
              }]}>
                  Cancel
              </TextComponent>
            </TouchableOpacity>
            <View style={styles.textInput}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="HT"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
              />
            </View>
            <View style={styles.buttonsPhone}>
              <TouchableOpacity
                disabled={value?.length < 8 }
                style={[
                  styles.signButton,
                  {
                    backgroundColor: value?.length < 8 ? Color.gray_disabled : Color.primary,
                    width: '40%',
                  },
                ]}
                onPress={signInWithPhoneNumber}>
                <Icon
                  name="call"
                  size={24}
                  color= '#ffffff'
                  style={[styles.phoneNumberIcon]}
                />
                <TextComponent style={[styles.signText]}> Envoyer </TextComponent>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[
                styles.signButton,
                {
                  width:120,
                  backgroundColor:'transparent',
                  marginTop: 40,
                  marginLeft: Dimensions.get('window').width -140,
                },
              ]}
              onPress={() => navigation.goBack()}>
              <Icon
                name="close"
                size={24}
                color= {Color.secondary}
                style={[styles.phoneNumberIcon]}
              />
              <TextComponent style={[styles.signText,{
                color: Color.secondary,        
              }]}>
                  Cancel
              </TextComponent>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 20,
                padding: 26,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextComponent fontSize={31} 
                fontFamily='Montserrat-Bold'
              >
                {lang?.verify_code}
              </TextComponent>
              <TextComponent>
                {lang?.verify_code_message}              
              </TextComponent>
            </View>
            <View
              style={[
                {
                  alignSelf: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={valueConfirm}
                onChangeText={setValueConfirm}
                cellCount={CELL_COUNT}
                rootStyle={confirmStyles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[
                      confirmStyles.cell,
                      isFocused && confirmStyles.focusCell,
                    ]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </View>

            <View
              style={[
                styles.buttonsPhone,
                {
                  justifyContent: 'flex-end',
                },
              ]}>
              <TouchableOpacity
                disabled={valueConfirm.length < 6 }
                style={[
                  styles.signButton,
                  {
                    backgroundColor:  valueConfirm.length < 6 ? Color.white : Color.primary,
                    width: 110,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight:20
                  },
                ]}
                onPress={() => confirmCode()}>
                <Text
                  style={[
                    styles.signText,
                    {
                      color:  '#fff',
                      textAlign: 'center',
                    },
                  ]}>
                  Envoyer
                </Text>
              </TouchableOpacity>           
            </View>
          </View>
        )}
        
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  buttonsContainer: {
    flex: 1,
  },
  

  buttonsPhone: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  signButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#DDDDDD',
    borderRadius: 32,
  },
  phoneNumberIcon: {
    marginRight: 12,
  },
  signText: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  textInput: {
    padding: 16,
    marginTop: 36,

  },
});

const confirmStyles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 21,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: Color.black,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 2,
    borderRadius: 8,
    color: Color.black,
    fontFamily: 'Montserrat-Bold',
  },
  focusCell: {
    borderColor: '#999',
  },
});


const PhoneLoginWithLoading = withLoadingModal(PhoneLogin, 'Loading ...');
export default PhoneLoginWithLoading;
