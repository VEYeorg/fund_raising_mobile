import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: 'normal' | 'bold' | '600' | '700';
}

const TextComponent: React.FC<TextProps> = ({
  fontSize,
  color,
  fontWeight,
  fontFamily,
  style,
  ...restProps
}) => {
  const textStyle: TextStyle = {
    fontFamily: fontFamily || 'Roboto', // Default font family is Roboto if not specified
    fontSize: fontSize || 16, // Default font size is 16 if not specified
    color: color || '#000000', // Default text color is black if not specified
    fontWeight: fontWeight || 'normal', // Default font weight is normal if not specified
  };

  return <RNText style={[styles.text, textStyle, style]} {...restProps} />;
};

const styles = StyleSheet.create({
  text: {},
});

export default TextComponent;
