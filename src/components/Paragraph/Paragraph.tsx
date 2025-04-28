import {StyleSheet, Text, TextProps} from 'react-native';
import theme from '@/config/theme';

type ParagraphProps = {
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  numberOfLines?: number;
} & TextProps;

export function Paragraph({
  children,
  color = theme.colors.textPrimary,
  fontSize = theme.fontSizes.medium,
  fontFamily = theme.fonts.regular,
  style,
  numberOfLines,
}: ParagraphProps) {
  return (
    <Text
      maxFontSizeMultiplier={1.2}
      numberOfLines={numberOfLines}
      style={[styles.text, {color, fontSize, fontFamily}, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Regular',
    textTransform: 'lowercase',
  },
});
