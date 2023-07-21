import React from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ProjectType} from '../../types/Index';
import {projects} from '../../mock/feeds';
import {feedStyles} from './FeedsStyle';
import {imagesitem13x, imagesitem33x, user3x} from '../../assets/images';
import TextComponent from '../../component/atom/CustomText';
import CustomProgressBar from '../../component/atom/CustomProgressBar';
import CustomButton from '../../component/atom/CustomButton';
import ItemUser from '../../component/ItemUser';

import UserDonation from '../../component/UserDonation';
import UserCommentItem from '../../component/UserCommentItem';
import {boxShadow} from '../../assets/GlobalStyles';

const FeedDetails: React.FC<ProjectType> = ({navigation}) => {
  const [readMore, setReadMore] = React.useState(false);
  const handleSetReadMore = () => {
    setReadMore(!readMore);
  };

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
          <TextComponent
            style={[feedStyles.goalTextBold, {marginTop: 12}]}
            numberOfLines={2}>
            Let’s Give Reggie A Life Changing Gift! Changing Gift after 20 years
            of
          </TextComponent>
          <CustomProgressBar value={65} />

          <View style={feedStyles.contentTextPrice}>
            <TextComponent
              style={[feedStyles.goalText, {marginTop: 12}]}
              numberOfLines={2}>
              $26,269 USD raised of $20,000 goal • 1.2K donations
            </TextComponent>
          </View>

          <CustomButton
            title="Donate"
            onPress={() => console.log('Button')}
            buttonStyle={{
              backgroundColor: '#8FBC8F',
              width: '100%',
              borderRadius: 26,
              marginTop: 16,
            }}
            textStyle={{color: '#fff'}}
          />

          <View
            style={{
              backgroundColor: 'transparent',
            }}>
            <ItemUser
              onPress={() => {}}
              image={user3x}
              name="@JUlio"
              address="Port-au-Prince, Haiti"
              isOrganization={true}
              contactButton={() => (
                <CustomButton
                  title="Contact"
                  onPress={() => console.log('Button')}
                  buttonStyle={[
                    {
                      backgroundColor: '#Fff',
                      width: '100%',
                      borderRadius: 26,
                      marginTop: 8,
                    },
                    boxShadow,
                  ]}
                  textStyle={{color: '#333'}}
                />
              )}
            />
          </View>

          <View>
            <TextComponent
              style={{
                marginTop: 16,
                paddingVertical: 12,
                backgroundColor: '#ffffff',
                borderBottomColor: '#000',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderTopColor: '#000',
              }}>
              Created 3 days ago - Donation
            </TextComponent>

            <TextComponent
              numberOfLines={readMore ? null : 5}
              style={[feedStyles.description, {marginTop: 16}]}>
              I was walking and saw this guy playing basketball so I introduced
              myself and his name was Reggie. I told him my ball had been stolen
              and asked if I could shoot around with him and out of the kindness
              of his heart he said yes forsure! I then surprised Reggie with
              $500 for his kindness. He began telling me his life story how his
              dream is to make it to the NBA and ever since he was 13 he had
              been in and out of homelessness. His friend just passed away and
              Reggie has been hit with storm after storm to derail him from his
              dream. Let’s raise some funds to bless Reggie with so he never has
              to worry about being on the streets again and can pursue his
              dreams!
            </TextComponent>

            <TouchableOpacity
              style={feedStyles.contentTextPrice}
              onPress={handleSetReadMore}>
              <TextComponent>
                {!readMore ? 'Read more' : 'Read less'}
              </TextComponent>
            </TouchableOpacity>
          </View>

          <View style={{}}>
            <TextComponent
              style={[
                feedStyles.goalTextBold,
                {
                  marginTop: 12,
                  fontSize: 29,
                },
              ]}
              numberOfLines={2}>
              Donations (1.2K)
            </TextComponent>

            <View
              style={{
                backgroundColor: 'transparent',
              }}>
              <TextComponent
                style={[
                  feedStyles.goalTextBold,
                  {
                    marginTop: 12,
                    fontSize: 15,
                  },
                ]}>
                120 people just donated
              </TextComponent>

              <FlatList
                horizontal={false}
                data={projects as ProjectType[]}
                renderItem={({item}) => (
                  <UserDonation
                    onPress={() => {}}
                    image={imagesitem33x}
                    name="@JUlio"
                    amount={150.0}
                  />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={feedStyles.container}
              />
            </View>
          </View>

          <View style={{}}>
            <TextComponent
              style={[
                feedStyles.goalTextBold,
                {
                  marginTop: 12,
                  fontSize: 19,
                },
              ]}
              numberOfLines={2}>
              Words of support (700)
            </TextComponent>

            <FlatList
              horizontal={false}
              data={projects as ProjectType[]}
              renderItem={({item}) => (
                <UserCommentItem
                  onPress={() => {}}
                  amount={150}
                  name="@JUlio"
                  comment="Lorem ipsum dolor sit amet consectetur elit."
                />
              )}
              keyExtractor={item => item.id}
              contentContainerStyle={feedStyles.container}
            />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={feedStyles.container}>
      <ScrollView>
        <View style={feedStyles.containerDetailsItem}>
          <ItemProject />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedDetails;
