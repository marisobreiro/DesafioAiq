import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/config/navigation';

import Menu from '../../assets/icons/menu.svg';
import Mail from '../../assets/icons/mail.svg';
import theme from '@/config/theme';

export function HeaderLeft() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePressMenu = () => {
    navigation.navigate('PerfilScreen');
  };
  return (
    <>
      <TouchableOpacity
        hitSlop={30}
        style={styles.menu}
        onPress={handlePressMenu}>
        <Menu width={24} height={24} stroke={'#7B1FA2'} />
        <Image
          source={require('../../assets/images/avatar.png')}
          style={styles.avatar}
        />
      </TouchableOpacity>
    </>
  );
}

export function HeaderRight() {
  return (
    <TouchableOpacity hitSlop={30} style={styles.menu}>
      <Mail width={24} height={24} stroke={'#7B1FA2'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  menuContainer: {
    backgroundColor: theme.colors.background,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -100,
  },
});
