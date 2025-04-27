import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {Heart, Star} from '@/assets/icons';
import {formatCurrency} from '@/utils/formatters';
import {Category} from '@/services/api';
import {Card, Pill} from '@/components';

type ProductItemProps = {
  item: {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
  };
};

export function ProductItem({item}: ProductItemProps) {
  const isFavorite = true;

  return (
    <Card
      children={
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item.image}}
              style={styles.image}
              resizeMode="contain"
              width={40}
              height={40}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Pill category={item.category as Category} />
            <View style={styles.detailsContainer}>
              <View style={styles.detailsLeftContainer}>
                <View style={styles.detailsContent}>
                  <Text style={styles.currency}>R$</Text>
                  <Text style={styles.secondaryText}>
                    {formatCurrency(item.price, false)}
                  </Text>
                </View>
                <View style={styles.detailsContent}>
                  <Star
                    width={18}
                    height={18}
                    stroke={'#7B1FA2'}
                    style={styles.icon}
                  />
                  <Text style={styles.secondaryText}>{item.rating.rate}</Text>
                </View>
              </View>
              {isFavorite && (
                <Heart
                  width={18}
                  height={18}
                  stroke={'#7B1FA2'}
                  fill={'#7B1FA2'}
                  style={styles.favorite}
                />
              )}
            </View>
          </View>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 60,
    height: 60,
    justifyContent: 'center',
    width: 60,
    marginRight: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
  textContainer: {width: '80%'},
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  detailsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  secondaryText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#333',
  },
  icon: {
    marginRight: 5,
  },
  currency: {
    fontFamily: 'Nunito-Bold',
    color: '#7B1FA2',
    marginRight: 5,
    fontSize: 16,
  },
  favorite: {
    justifyContent: 'flex-end',
  },
});
