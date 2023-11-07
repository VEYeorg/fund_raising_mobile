 // include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-firebase/firestore', () => () => {
    return {
      collection: jest.fn(() => {  }),
    };
  });

  jest.mock('@react-native-firebase/auth', () => () => {
    return {
      signInWithEmailAndPassword: jest.fn(() => {  }),
      createUserWithEmailAndPassword: jest.fn(() => {  }),
      signOut: jest.fn(() => {  }),
      currentUser: jest.fn(() => {  }),
      onAuthStateChanged: jest.fn(() => {  }),
      sendPasswordResetEmail: jest.fn(() => {  }),
      updateProfile: jest.fn(() => {  }),
    }
  })

  jest.mock('@react-native-firebase/storage', () => () => {
    return {
      ref: jest.fn(() => {  }),
      uploadBytes: jest.fn(() => {  }),
      getDownloadURL: jest.fn(() => {  }),
    }
  })

