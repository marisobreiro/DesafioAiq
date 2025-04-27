import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Category} from '@/services/api';

export function Pill(item: Category) {
  const categoryTranslations: Record<Category, string> = {
    [Category.MensClothing]: 'Roupas Masculinas',
    [Category.WomensClothing]: 'Roupas Femininas',
    [Category.Jewelery]: 'Joias',
    [Category.Electronics]: 'Eletrônicos',
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{categoryTranslations[item]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b79bc6',
    padding: 5,
    borderRadius: 16,
    width: 150,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#333',
  },
});
