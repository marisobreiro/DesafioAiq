import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';

export function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />

      <View style={{padding: 10}}>
        <Image
          style={styles.image}
          source={require('../../assets/banners/bannerHome.png')}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity style={styles.favButton}>a</TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  favButton: {
    bottom: 0,
    position: 'relative',
    right: 0,
    width: 60,
    height: 60,
    backgroundColor: '#7B1FA2',
    borderRadius: 40,
  },
});
