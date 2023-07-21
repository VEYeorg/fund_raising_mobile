import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {UserType} from '../types/Index';
import {Image} from 'react-native';
import {useAuth} from '../context/AuthContext';
import ItemDonationVertical from '../component/ItemDonationVertical';
import TextComponent from '../component/atom/CustomText';

let user: UserType = {
  id: '1',
  name: 'John Doe',
  email: 'j@meial.com',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, vitae aliquam nisl nunc sit amet nisl. Sed vitae nisl eg',
};

const Profile: React.FC<UserType> = () => {
  let {logout} = useAuth();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/a.png')}
          resizeMode="contain"
          style={styles.profile}
        />
      </View>
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View>
        <TextComponent fontSize={17} color="#000" fontWeight="bold">
          Your donations
        </TextComponent>

        <FlatList
          horizontal={false}
          data={[1, 2, 3, 4, 5, 6, 6] as any}
          renderItem={() => (
            <View style={styles.margin}>
              <ItemDonationVertical onPress={() => {}} />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 16,
    backgroundColor: '#333333',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 8,
  },
  margin: {
    marginTop: 16,
  },
});

export default Profile;
