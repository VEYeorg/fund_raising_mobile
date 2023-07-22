import React from 'react';
import {FlatList, View, Text, SafeAreaView, ScrollView} from 'react-native';
import {ProjectType} from '../../types/Index';
import {projects} from '../../mock/feeds';
import ItemDonation from '../../component/ItemDonation';
import SearchBar from '../../component/SearchBar';
import NotificationIcon from '../../component/atom/NotificationIcon';
import Category from '../../component/Category';
import {Color} from '../../assets/GlobalStyles';
import ItemDonationVertical from '../../component/ItemDonationVertical';
import {feedStyles} from './FeedsStyle';
import CustomButton from '../../component/atom/CustomButton';

const Feed: React.FC<ProjectType> = ({navigation}) => {
  const [expier, setExpier] = React.useState(false);

  setTimeout(() => {
    setExpier(true);
  }, 3000);

  return (
    <SafeAreaView style={feedStyles.container}>
      <View style={feedStyles.searchContainer}>
        <SearchBar placeholder="Search" />

        <NotificationIcon count={3} style={feedStyles.notificationIcon} />
      </View>

      <ScrollView>
        {!expier && (
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
        )}
        <View style={feedStyles.categoryContainer}>
          <Category
            iconName="wallet-outline"
            title="Donate"
            iconSize={32}
            onPress={() => console.log('Home')}
            style={[
              feedStyles.category,
              {
                backgroundColor: Color.primary,
              },
            ]}
            color={Color.white}
            styleContainer={[feedStyles.styleContainer]}
          />

          <Category
            iconName="cart-outline"
            title="Charity"
            iconSize={32}
            onPress={() => console.log('Home')}
            style={feedStyles.category}
            color={Color.white}
            styleContainer={feedStyles.styleContainer}
          />
        </View>

        <View style={feedStyles.forestContainer}>
          <Text style={feedStyles.projectTitle}>Urgent FundRaising</Text>
          <ScrollView horizontal={true}>
            <FlatList
              horizontal={true}
              data={projects as ProjectType[]}
              renderItem={() => (
                <View style={feedStyles.projectContainer}>
                  <ItemDonation
                    onPress={() => {
                      navigation.navigate('FeedDetails');
                    }}
                  />
                </View>
              )}
              keyExtractor={item => item.id}
              contentContainerStyle={feedStyles.container}
            />
          </ScrollView>
        </View>

        <View style={feedStyles.forestContainer}>
          <Text style={feedStyles.projectTitle}>Urgent FundRaising</Text>
          <FlatList
            horizontal={false}
            data={projects as ProjectType[]}
            renderItem={() => (
              <View style={feedStyles.projectItem}>
                <ItemDonationVertical
                  onPress={() => {
                    navigation.navigate('FeedDetails');
                  }}
                />
              </View>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={feedStyles.container}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
