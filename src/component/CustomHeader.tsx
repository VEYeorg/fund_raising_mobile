import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextComponent from './atom/CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NotificationIcon from './atom/NotificationIcon';
import {Color} from '../assets/GlobalStyles';
import Config from 'react-native-config';
Config.FEATURE_ENABLED; // true

interface SearchBarProps {
  placeholder?: string;
  goToSearch?: () => void;
  navigation?: unknown;}


const CustomHeader: React.FC<SearchBarProps> = ({goToSearch}) => {
  // how to show an env variable
  return (
    <View style={styles.searchContainer}>
      <TextComponent
        fontSize={32}
        fontFamily='LilitaOne-Regular'
        style={{
          color: Color.primary,
          marginLeft: 4,
          width: '70%',
        }}>
        POTE KOLE 
    
      </TextComponent>
      <Ionicons
        name="search"
        size={28}
        color={Color.black}
        style={{marginRight: 8}}
        onPress={goToSearch}
      />
      <NotificationIcon count={3} style={styles.notificationIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 8,
  },
  searchContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationIcon: {
    marginLeft: 8,
  },
});

export default CustomHeader;
