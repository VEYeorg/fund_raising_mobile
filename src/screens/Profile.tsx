import React from 'react';
import {View, StyleSheet} from 'react-native';
import {UserType} from '../types/Index';
import {Image} from 'react-native';
import {useAuth} from '../context/AuthContext';
import TextComponent from '../component/atom/CustomText';
import {Color} from '../assets/GlobalStyles';
import CustomSeparator from '../component/atom/CustomSeparator';
import ListItem from '../component/atom/ListItem';
import CustomButton from '../component/atom/CustomButton';

let user: UserType = {
  id: '1',
  name: 'John Doe',
  email: 'j@meial.com',
};

const Profile: React.FC<UserType> = () => {
  let {logout} = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
        <View>
          <TextComponent
            fontSize={27}
            color={Color.secondary}
            fontWeight="bold">
            Hi, I'm {user.name}
          </TextComponent>
          <TextComponent fontSize={17} color="#000" fontWeight="normal">
            Join since 2020
          </TextComponent>
          <CustomButton
            title=" + Start a go fund me"
            onPress={() => console.log('Button')}
            buttonStyle={{
              backgroundColor: 'green',
              marginTop: 16,
              borderRadius: 26,
            }}
            textStyle={{color: '#fff'}}
          />
        </View>

        <Image
          source={require('../assets/images/a.png')}
          resizeMode="stretch"
          style={styles.profile}
        />
      </View>

      <CustomSeparator />

      <View style={{padding: 8}}>
        <TextComponent
          fontSize={23}
          color={Color.black}
          fontWeight="bold"
          fontFamily="Roboto">
          Settings
        </TextComponent>

        <ListItem
          text="All Donations"
          icon="card-outline"
          onPress={() => console.log('Settings pressed')}
          fontSize={20}
          color="#333"
          containerStyle={styles.containerList}
          iconStyle={styles.customIcon}
        />

        <ListItem
          text="Messages"
          icon="chatbubble-outline"
          onPress={() => console.log('Settings pressed')}
          fontSize={20}
          color="#333"
          containerStyle={styles.containerList}
          iconStyle={styles.customIcon}
        />

        <ListItem
          text="Account details"
          icon="person-outline"
          onPress={() => console.log('Settings pressed')}
          fontSize={20}
          color="#333"
          containerStyle={styles.containerList}
          iconStyle={styles.customIcon}
        />
        <ListItem
          text="Cart information"
          icon="card-outline"
          onPress={() => console.log('Settings pressed')}
          fontSize={20}
          color="#333"
          containerStyle={styles.containerList}
          iconStyle={styles.customIcon}
        />

        <ListItem
          text="How it works"
          icon="information-circle-outline"
          onPress={() => console.log('Settings pressed')}
          fontSize={20}
          color="#333"
          containerStyle={styles.containerList}
          iconStyle={styles.customIcon}
        />

        <ListItem
          text="Terms & Conditions"
          icon="document-outline"
          onPress={() => console.log('Settings pressed')}
          fontSize={20}
          color="#333"
          containerStyle={styles.containerList}
          iconStyle={styles.customIcon}
        />
        <ListItem
          text="Privacy Policy"
          icon="copy-outline"
          onPress={() => console.log('Settings pressed')}
          fontSize={20}
          color="#333"
          containerStyle={styles.containerList}
          iconStyle={styles.customIcon}
        />

        <ListItem
          text="Delete Account"
          icon="trash-bin-outline"
          onPress={() => console.log('Settings pressed')}
          fontSize={20}
          color="#333"
          containerStyle={styles.containerList}
          iconStyle={styles.customIcon}
        />

        <ListItem
          text="Logout"
          icon="exit-outline"
          onPress={() => console.log('Settings pressed')}
          fontSize={20}
          color="#333"
          containerStyle={styles.containerList}
          iconStyle={styles.customIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#333333',
  },
  bar: {
    width: 'auto',
    backgroundColor: '#333',
    height: 1,
    marginVertical: 24,
    marginBottom: 24,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  containerProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Color.primary,
  },
  email: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 8,
  },
  margin: {
    marginTop: 16,
  },

  containerList: {
    justifyContent: 'flex-start',
    textAlign: 'left',
    paddingVertical: 12,
  },
  customContainer: {
    backgroundColor: '#f0f0f0',
  },
  customIcon: {
    marginRight: 10,
    fontSize: 28,
  },
});

export default Profile;
