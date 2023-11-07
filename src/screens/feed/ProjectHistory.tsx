import React, { useEffect } from 'react';
import {FlatList, View, SafeAreaView, ScrollView} from 'react-native';
import {feedStyles} from './FeedsStyle';
import {useFunding} from '../../context/FundingContext';
import ItemDonationVertical from '../../component/ItemDonationVertical';
import {useAuth} from '../../context/AuthContext';
import EmptyComponent from '../../component/atom/EmptyComponent';
import TextComponent from '../../component/atom/CustomText';
import { StackNavigationProp } from '@react-navigation/stack';
import { FeedStackParamList } from '../../navigations/MainNavigation';
import { Color } from '../../assets/GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type HistoryScreenNavigationProp = StackNavigationProp<FeedStackParamList, 'FeedDetails'>;

interface Props {
  navigation: HistoryScreenNavigationProp;
}

const History: React.FC<Props> = ({navigation}) => {
  
  const {projects, fundraising, handleGetProjectByUserId, handleGetFundraising} = useFunding();
  const {user} = useAuth();
  const scrollRef = React.useRef<ScrollView>(null);
 
  navigation.setOptions({
    title: 'Back to Profile',
    headerLeft: () => <Ionicons name="close" size={26} 
      onPress={() => navigation.goBack()}
      style={{
        padding: 12,
        color: Color.black,
      }}
    />,
  });

  useEffect( () => {
    if(user){
      if(user.role == 1){
        handleGetFundraising()
      }else{
        handleGetProjectByUserId(user.id!);
      }
    }
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <SafeAreaView style={feedStyles.container}>
      <ScrollView ref={scrollRef}>
        <View style={feedStyles.forestContainer}>
          {projects?.length === 0 && (
            <EmptyComponent>
              <TextComponent>No Project</TextComponent>
            </EmptyComponent>
          )}

          <TextComponent
            fontSize={11}
            style={{
              color: Color.black,
              marginLeft: 16,
              marginTop: 16,
            }}>
            {user?.role !== 1 ? 'All Fundraising' : lang.my_fundraising }
          </TextComponent>
        
          <FlatList
            data={ user.role == 1 ? fundraising : projects }
            renderItem={project => (
              <View style={feedStyles.projectItemVertical}>
                <ItemDonationVertical
                  project={project}
                  onPress={() => {
                    navigation.navigate('ManageFundrasing', {
                      project: project?.item,
                    });
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

export default History;
