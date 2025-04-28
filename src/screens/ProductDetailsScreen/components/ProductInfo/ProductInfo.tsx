import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import theme from '@/config/theme';
import {Star} from '@/assets/icons';
import {Category, Product} from '@/services/api';
import {Paragraph, Pill} from '@/components';

export function ProductInfo({
  title,
  category,
  rating,
  description,
}: Omit<Product, 'id' | 'image' | 'price'>) {
  const color = '#efcd26';

  return (
    <View style={styles.container}>
      <Paragraph
        fontFamily={theme.fonts.bold}
        fontSize={theme.fontSizes.extraLarge}>
        {title}
      </Paragraph>
      <Pill category={category as Category} />

      <ScrollView style={styles.descriptionContainer}>
        <View style={styles.descriptionTitleContainer}>
          <Paragraph fontSize={theme.fontSizes.large}>descrição</Paragraph>
          <View style={styles.ratingContainer}>
            <Paragraph fontSize={theme.fontSizes.large}>
              {rating.rate}
            </Paragraph>
            <Star
              width={theme.fontSizes.large}
              height={theme.fontSizes.large}
              stroke={color}
              fill={color}
              style={styles.ratingIcon}
            />
          </View>
        </View>
        <Paragraph style={styles.text}>{description}</Paragraph>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  descriptionContainer: {
    paddingTop: 10,
    overflow: 'scroll',
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
    maxHeight: 36,
    maxWidth: 36,
  },

  text: {
    textAlign: 'justify',
  },
});
