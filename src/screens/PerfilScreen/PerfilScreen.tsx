import {Image, StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Button, Layout} from '@/components';
import theme from '@/config/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export function PerfilScreen() {
  const navigation = useNavigation();
  const handleLogout = async () => {
    await auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        });
      });
  };
  return (
    <Layout
      children={
        <SafeAreaView style={styles.container}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
          <View style={styles.buttonContainer}>
            <Button title="sair" onPress={handleLogout} />
          </View>
        </SafeAreaView>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingTop: 20,
  },
  content: {
    justifyContent: 'space-between',
    padding: 10,
  },
  filterList: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    width: ' 100%',
  },
});
