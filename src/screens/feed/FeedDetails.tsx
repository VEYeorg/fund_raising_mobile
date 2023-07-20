import React from 'react';
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {ProjectType} from '../../types/Index';
import {projects} from '../../mock/feeds';
import NotificationIcon from '../../component/atom/NotificationIcon';
import ItemDonationVertical from '../../component/ItemDonationVertical';
import {feedStyles} from './FeedsStyle';
import {imagesitem13x} from '../../assets/images';
import TextComponent from '../../component/atom/CustomText';
import CustomProgressBar from '../../component/atom/CustomProgressBar';
import CustomButton from '../../component/atom/CustomButton';

const FeedDetails: React.FC<ProjectType> = () => {
  const ItemProject: React.FC<{item: ProjectType}> = () => (
    <View style={feedStyles.projectContainerDetails}>
      <View onPress={() => {}}>
        <View style={feedStyles.imagesView}>
          <Image
            source={imagesitem13x}
            style={feedStyles.image}
            resizeMode="cover"
          />
        </View>

        <View style={feedStyles.contentText}>
          <TextComponent style={feedStyles.goalText}>A title</TextComponent>
          <CustomProgressBar value={65} />
          <View style={feedStyles.contentTextPrice}>
            <TextComponent style={feedStyles.goalText}>
              HTG 100.00 plus a long text a more long text
            </TextComponent>
          </View>

          <TextComponent numberOfLines={2} style={feedStyles.description}>
            Some description about the project Some description about theSome
            description about the project Some description about the project
          </TextComponent>

          <CustomButton title="Donate" onPress={() => console.log('Button')} />
        </View>
      </View>
    </View>
  );

  const renderProject: React.FC<{item: ProjectType}> = () => (
    <View style={feedStyles.projectItem}>
      <ItemDonationVertical onPress={() => {}} />
    </View>
  );

  return (
    <SafeAreaView style={feedStyles.container}>
      <View style={feedStyles.headerContainer}>
        <NotificationIcon
          name="arrow-back-outline"
          style={[
            feedStyles.notificationIcon,
            {backgroundColor: 'white', marginLeft: -10},
          ]}
        />
        <NotificationIcon
          name="heart-outline"
          style={feedStyles.notificationIcon}
        />
      </View>

      <ScrollView>
        <View style={feedStyles.containerDetailsItem}>
          <ItemProject />
        </View>

        <View style={feedStyles.forestContainer}>
          <Text style={feedStyles.projectTitle}>Urgent FundRaising</Text>
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

export default FeedDetails;
