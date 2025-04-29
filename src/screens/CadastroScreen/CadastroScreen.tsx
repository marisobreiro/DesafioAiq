import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/config/navigation';

import theme from '@/config/theme';
import {Aiq} from '@/assets/icons';
import {Button, Paragraph} from '@/components';

export function CadastroScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmed, setPasswordConfirmed] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnChangeEmail = (e: string) => {
    setEmail(e);
  };
  const handleOnChangePassword = (p: string) => {
    setPassword(p);
  };
  const handleOnChangeConfirmPassword = (c: string) => {
    setPasswordConfirmed(c);
  };

  const handleRegister = async () => {
    if (!email || !password || !passwordConfirmed) {
      Alert.alert('ih', 'por favor, informe seus dados');
      return;
    }

    setLoading(true);

    await auth()
      .createUserWithEmailAndPassword(email, passwordConfirmed)
      .then(() => {
        navigation.navigate('HomeScreen');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Ih', 'esse email ja possui conta');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Ih', 'esse email é inválido');
        }
      });

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
          onChangeText={e => handleOnChangeEmail(e)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="insira sua senha aqui"
          placeholderTextColor={theme.colors.background}
          onChangeText={p => handleOnChangePassword(p)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="repita sua senha aqui"
          placeholderTextColor={theme.colors.background}
          onChangeText={c => handleOnChangeConfirmPassword(c)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="cadastrar"
          isLoading={loading}
          backgroundColor={theme.colors.terciary}
          onPress={() => handleRegister()}
        />
      </View>
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
