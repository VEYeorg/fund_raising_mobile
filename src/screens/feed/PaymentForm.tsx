import React from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {ProjectType} from '../../types/Index';
import {projects} from '../../mock/feeds';
import {feedStyles} from './FeedsStyle';
import TextComponent from '../../component/atom/CustomText';
import CustomButton from '../../component/atom/CustomButton';

import UserCommentItem from '../../component/UserCommentItem';
import ListItem from '../../component/atom/ListItem';

const PaymentForm: React.FC<ProjectType> = ({navigation}) => {
  //  set name for header
  navigation.setOptions({
    title: 'Payment for project',
  });

  const [readMore, setReadMore] = React.useState(false);
  const handleSetReadMore = () => {
    setReadMore(!readMore);
  };
  const [value, onChangeText] = React.useState(100);

  return (
    <SafeAreaView style={feedStyles.container}>
      <ScrollView>
        <View style={feedStyles.contentText}>
          <TextComponent
            style={[feedStyles.goalTextBold, {marginTop: 12}]}
            numberOfLines={2}>
            You're supporting Making Black Math Equity a Priority in California
          </TextComponent>

          <TextComponent style={{marginTop: 12}} numberOfLines={2}>
            You're supporting Making Black Math Equity a Priority in California
          </TextComponent>

          <View style={feedStyles.contentTextPrice}>
            <TextComponent
              fontSize={25}
              fontWeight="bold"
              numberOfLines={2}
              style={{
                position: 'absolute',
                left: 16,
                top: 28,
              }}>
              HTG
            </TextComponent>

            <TextComponent
              fontSize={25}
              fontWeight="bold"
              numberOfLines={2}
              style={{
                position: 'absolute',
                right: 24,
                top: 28,
              }}>
              {Number(value)}
            </TextComponent>

            <TextInput
              keyboardType="numeric"
              style={{
                height: 60,
                width: 300,
                borderRadius: 26,
                color: 'transparent',

                position: 'absolute',
                top: 16,
                zIndex: 5,
                paddingHorizontal: 320,
              }}
              onChangeText={text => onChangeText(text)}
            />
            <View
              style={{
                height: 60,
                borderColor: '#eee',
                borderWidth: 2,
                width: '100%',
                borderRadius: 26,
                marginTop: 16,
                marginBottom: 16,
                color: 'transparent',
              }}
            />
          </View>

          <ListItem
            text="Pay with moncash or credit card"
            icon="card-outline"
            onPress={() => console.log('Settings pressed')}
            fontSize={20}
            fontWeight="bold"
            color="#333"
            containerStyle={styles.containerList}
            iconStyle={styles.customIcon}
          />

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
            Ede l ap pran 15% ko m fee pou l peye server, depans, ak pou ede nou
            kontinye travay la a.
          </TextComponent>

          <CustomButton
            title="Payer par moncash"
            onPress={() => console.log('Button')}
            buttonStyle={{
              backgroundColor: '#731212',
              width: '100%',
              borderRadius: 26,
              marginTop: 16,
            }}
            textStyle={{color: '#fff'}}
          />

          <CustomButton
            title="Payer par credit card"
            onPress={() => console.log('Button')}
            buttonStyle={{
              backgroundColor: '#5B5BB1',
              width: '100%',
              borderRadius: 26,
              marginTop: 16,
            }}
            textStyle={{color: '#fff'}}
          />

          <View style={{marginTop: 32}}>
            <TextComponent
              style={[
                feedStyles.goalTextBold,
                {
                  marginTop: 12,
                  marginBottom: 12,
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default PaymentForm;
