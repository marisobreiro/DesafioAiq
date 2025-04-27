import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Category} from '@/services/api';

export function Pill({category}: {category: Category}) {
  const categoryTranslations: Record<Category, string> = {
    [Category.MensClothing]: 'Roupas Masculinas',
    [Category.WomensClothing]: 'Roupas Femininas',
    [Category.Jewelery]: 'Joias',
    [Category.Electronics]: 'Eletrônicos',
  };

  const translatedCategory = categoryTranslations[category];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{translatedCategory}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: '#b79bc6',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 16,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: '#fff',
  },
});
