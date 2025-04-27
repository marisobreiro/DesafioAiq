import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

type CardProps = {
  children: React.ReactNode;
  onPress?: () => void;
};

export function Card({children, onPress}: CardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
});
