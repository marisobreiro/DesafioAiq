import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import theme from '@/config/theme';
import {Heart} from '@/assets/icons';

export function FavoriteButton({...props}: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.favButton} {...props}>
      <Heart width={24} height={24} stroke={theme.colors.secondary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  favButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 40,
    height: 60,
    width: 60,
    margin: 30,
    zIndex: 1,
    position: 'absolute',
    bottom: 20,
    right: 0,
  },
});
