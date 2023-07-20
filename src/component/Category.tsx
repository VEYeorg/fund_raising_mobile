import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

interface CategoryIconProps {
  style?: StyleProp<ViewStyle>;
  styleContainer: StyleProp<ViewStyle>;
  iconName: string;
  iconSize: number;
  title: string;
  onPress: () => void;
  color?: string;
}

const Category: React.FC<CategoryIconProps> = ({
  style,
  styleContainer,
  iconName,
  title = '',
  iconSize = 24,
  color = '#333',
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styleContainer}>
      <View style={[styles.baseStyleContainer, style]}>
        <Ionicons name={iconName} color={color} size={iconSize} />
      </View>
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseStyleContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  categoryTitle: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Category;
