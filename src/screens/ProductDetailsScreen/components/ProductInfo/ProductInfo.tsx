import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Star} from '@/assets/icons';
import {Category, Product} from '@/services/api';
import {Pill} from '@/components';

export function ProductInfo({
  title,
  category,
  rating,
  description,
}: Omit<Product, 'id' | 'image' | 'price'>) {
  const size = 22;
  const color = '#efcd26';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pill category={category as Category} />

      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionTitleContainer}>
          <Text style={styles.subtitle}>descrição</Text>

          <View style={styles.ratingContainer}>
            <Text style={styles.subtitle}>{rating.rate}</Text>
            <Star
              width={size}
              height={size}
              stroke={color}
              fill={color}
              style={styles.ratingIcon}
            />
          </View>
        </View>

        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    overflow: 'scroll',
  },
  descriptionContainer: {
    paddingTop: 10,
  },
  descriptionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    marginLeft: 5,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Nunito-Bold',
    textTransform: 'lowercase',
  },
  subtitle: {
    fontSize: 22,
    fontFamily: 'Nunito-Regular',
    textTransform: 'lowercase',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    textTransform: 'lowercase',
    textAlign: 'justify',
  },
});
