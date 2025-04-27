import React from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

import Menu from '../../assets/icons/menu.svg';
import Mail from '../../assets/icons/mail.svg';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity hitSlop={30} style={styles.menu}>
        <Menu width={24} height={24} stroke={'#7B1FA2'} />
        <Image
          source={require('../../assets/images/avatar.png')}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <TouchableOpacity hitSlop={30}>
        <Mail width={24} height={24} stroke={'#7B1FA2'} />
      </TouchableOpacity>
    </SafeAreaView>
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
});
