import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../component/SearchBar';
import ItemDonation from '../component/ItemDonation';
import Category from '../component/Category';
import ItemDonationVertical from '../component/ItemDonationVertical';
import CustomButton from '../component/atom/CustomButton';
import ItemUser from '../component/ItemUser';
import {user3x} from '../assets/images';
import UserCommentItem from '../component/UserCommentItem';

const Build = () => {
  return (
    <ScrollView style={styles.container}>
      <Category
        iconName="home"
        title="Home a"
        iconSize={32}
        onPress={() => console.log('Home')}
        style={styles.category}
        color="red"
      />
      <ItemDonation />
      <SearchBar placeholder="Search" />
      <ItemDonationVertical onPress={() => {}} />
      <CustomButton
        title="Custom Button"
        onPress={() => console.log('Button')}
        buttonStyle={{backgroundColor: 'green', width: '40%', borderRadius: 26}}
        textStyle={{color: '#fff'}}
      />
      <ItemUser
        onPress={() => {}}
        image={user3x}
        name="@JUlio"
        address="Port-au-Prince, Haiti"
        isOrganization={true}
      />

      <UserCommentItem
        onPress={() => {}}
        amount={150}
        name="@JUlio"
        comment="Lorem ipsum dolor sit amet consectetur elit. Lorem ipsum dolor sit amet consectetur elit. Lorem ipsum dolor sit amet consectetur elit."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  category: {
    width: 60,
    height: 60,
  },
});

export default Build;
