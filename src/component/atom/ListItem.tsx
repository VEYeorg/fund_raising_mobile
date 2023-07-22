import React from 'react';
import {View, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import TextComponent from './CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ListItemType {
  onPress?: () => void;
  text: string;
  icon: string;
  fontSize?: number;
  color?: string;
  fontWeight?: 'normal' | 'bold';
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
}

const ListItem: React.FC<ListItemType> = ({
  onPress,
  text,
  icon = 'chevron-forward-outline',
  fontSize = 17,
  color = '#000',
  fontWeight = 'normal',
  containerStyle,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View style={[styles.containerListItem]}>
        <Ionicons name={icon} size={24} color="#000" style={iconStyle} />
        <View style={{marginLeft: 8}}>
          <TextComponent
            fontSize={fontSize}
            color={color}
            fontWeight={fontWeight}>
            {text}
          </TextComponent>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  containerListItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default ListItem;
