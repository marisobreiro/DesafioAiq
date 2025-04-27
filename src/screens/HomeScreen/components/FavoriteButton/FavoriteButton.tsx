import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Heart} from '@/assets/icons';

export function FavoriteButton() {
  return (
    <TouchableOpacity style={styles.favButton}>
      <Heart width={24} height={24} stroke={'#fff'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  favButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7B1FA2',
    borderRadius: 40,
    height: 60,
    width: 60,
    margin: 30,
    zIndex: 1,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
