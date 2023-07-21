import React from 'react';
import {FlatList, View, Text, SafeAreaView, ScrollView} from 'react-native';
import {ProjectType} from '../../types/Index';
import {projects} from '../../mock/feeds';
import SearchBar from '../../component/SearchBar';
import NotificationIcon from '../../component/atom/NotificationIcon';
import ItemDonationVertical from '../../component/ItemDonationVertical';
import {feedStyles} from './FeedsStyle';

const Favorite: React.FC<ProjectType> = () => {
  const renderProject: React.FC<{item: ProjectType}> = () => (
    <View style={feedStyles.projectItem}>
      <ItemDonationVertical onPress={() => {}} />
    </View>
  );

  return (
    <SafeAreaView style={feedStyles.container}>
      <View style={feedStyles.searchContainer}>
        <SearchBar placeholder="Search" />
        <NotificationIcon count={3} style={feedStyles.notificationIcon} />
      </View>

      <ScrollView>
        <View style={feedStyles.forestContainer}>
          <Text style={feedStyles.projectTitle}> Your wish list </Text>
          <FlatList
            horizontal={false}
            data={projects as ProjectType[]}
            renderItem={renderProject}
            keyExtractor={item => item.id}
            contentContainerStyle={feedStyles.container}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorite;
