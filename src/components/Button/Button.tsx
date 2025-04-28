import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Paragraph} from '../Paragraph/Paragraph';
import theme from '@/config/theme';

type ButtonProps = {
  title: string;
  backgroundColor?: string;
  isLoading?: boolean;
  onPress: () => void;
} & TouchableOpacityProps;

export function Button({
  title,
  backgroundColor = '#7B1FA2',
  isLoading = false,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[style.container, {backgroundColor}]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.secondary} />
      ) : (
        <Paragraph
          numberOfLines={1}
          fontFamily={theme.fonts.bold}
          fontSize={theme.fontSizes.large}
          color={theme.colors.secondary}>
          {title}
        </Paragraph>
      )}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',

    borderRadius: 5,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 40,
    maxHeight: 100,
  },
});
