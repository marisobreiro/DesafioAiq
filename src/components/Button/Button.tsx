import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Paragraph} from '../Paragraph/Paragraph';
import theme from '@/config/theme';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export function Button({title}: ButtonProps) {
  return (
    <TouchableOpacity style={style.container}>
      <Paragraph
        numberOfLines={1}
        fontFamily={theme.fonts.bold}
        fontSize={theme.fontSizes.large}
        color={theme.colors.secondary}>
        {title}
      </Paragraph>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#7B1FA2',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 40,
    maxHeight: 100,
  },
});
