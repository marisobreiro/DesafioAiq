import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/config/navigation';

import theme from '@/config/theme';
import {Aiq} from '@/assets/icons';
import {Button, Paragraph} from '@/components';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnChangeEmail = (e: string) => {
    setEmail(e);
  };

  const handleOnChangePassword = (p: string) => {
    setPassword(p);
  };

  const handleLogin = async () => {
    console.log('chamou');
    if (!email || !password) {
      Alert.alert('ih', 'por favor, informe seus dados');
      return;
    }

    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert(
        'ih',
        'tivemos um erro para realizar seu login, confira seus dados e tente novamente',
      );
    }
    setLoading(false);
  };

  const handlePressHiperlink = () => {
    navigation.navigate('CadastroScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Aiq width={80} height={80} style={styles.logo} />
      <Paragraph
        color={theme.colors.secondary}
        fontSize={theme.fontSizes.extraLarge}
        fontFamily={theme.fonts.bold}>
        bem vindo(a)
      </Paragraph>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          placeholderTextColor={theme.colors.background}
          placeholder="insira seu email aqui"
          returnKeyType="next"
          onChangeText={e => handleOnChangeEmail(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="insira sua senha aqui"
          placeholderTextColor={theme.colors.background}
          returnKeyType="done"
          onChangeText={p => handleOnChangePassword(p)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="entrar"
          isLoading={loading}
          backgroundColor={theme.colors.terciary}
          onPress={() => handleLogin()}
        />
      </View>
      <TouchableOpacity onPress={handlePressHiperlink}>
        <Paragraph color={theme.colors.terciary} style={styles.hiperlink}>
          ainda não tenho conta
        </Paragraph>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  inputContainer: {width: '100%', padding: 40},
  input: {
    borderColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.medium,
    borderWidth: 1,
    color: theme.colors.secondary,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.medium,
    height: 50,
    marginVertical: 10,
    padding: 10,
    textTransform: 'lowercase',
  },
  hiperlink: {
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
});
