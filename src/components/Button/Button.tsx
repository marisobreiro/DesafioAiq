import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export function Button({title}: ButtonProps) {
  return (
    <TouchableOpacity style={style.container}>
      <Text style={style.text}>{title}</Text>
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
  },
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    color: '#fff',
  },
});
