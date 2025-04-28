import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import theme from '@/config/theme';
import {Heart, Star} from '@/assets/icons';
import {formatCurrency} from '@/utils/formatters';
import {Card, Paragraph, Pill} from '@/components';
import {isFavorite as checkIsFavorite} from '@/stores/favorites';
import {Category, Product} from '@/types';

type ProductItemProps = {
  item: Product;
  onPressItem: () => void;
};

export function ProductItem({item, onPressItem}: ProductItemProps) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      const fav = await checkIsFavorite(item.id);
      setFavorite(fav);
    };
    checkFavoriteStatus();
  }, [item.id]);

  return (
    <Card
      onPress={onPressItem}
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
            <View>
              <Paragraph
                adjustsFontSizeToFit
                numberOfLines={2}
                fontFamily={theme.fonts.bold}>
                {item.title}
              </Paragraph>
              <Pill category={item.category as Category} />
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.detailsLeftContainer}>
                <View style={styles.detailsContent}>
                  <Paragraph style={styles.currency}>R$</Paragraph>
                  <Paragraph fontSize={theme.fontSizes.small}>
                    {formatCurrency(item.price, false)}
                  </Paragraph>
                </View>

                <View style={styles.detailsContent}>
                  <Star
                    width={18}
                    height={18}
                    stroke={theme.colors.primary}
                    fill={theme.colors.primary}
                    style={styles.icon}
                  />
                  <Paragraph fontSize={theme.fontSizes.small}>
                    {item.rating.rate}
                  </Paragraph>
                </View>
              </View>
              {favorite && (
                <Heart
                  width={18}
                  height={18}
                  stroke={theme.colors.primary}
                  fill={theme.colors.primary}
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
    height: 100,
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
  textContainer: {
    justifyContent: 'space-between',
    width: '80%',
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
  icon: {
    marginRight: 5,
  },
  currency: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.primary,
    marginRight: theme.spacing.sm,
    textTransform: 'uppercase',
  },
  favorite: {
    justifyContent: 'flex-end',
  },
});
