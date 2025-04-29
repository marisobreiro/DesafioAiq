import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import theme from '@/config/theme';
import {useGetProductById} from '@/hooks/useGetProductById';
import {
  addFavorite,
  checkIsFavorite,
  removeFavorite,
  useStoreProducts,
} from '@/stores';
import {Button} from '@/components';
import {Category} from '@/types';

import {ProductCounter, ProductImage, ProductInfo} from './components';
import {RootStackParamList} from '@/config/navigation';

export type ProductDetailsScrenProps = {
  route: {params: RootStackParamList['ProductDetailsScreen']};
};

export function ProductDetailsScreen({route}: ProductDetailsScrenProps) {
  const [favorite, setFavorite] = useState(false);
  const {productId} = route.params;
  const {data, isPending} = useGetProductById(productId);

  const {products, decreaseProducts, increaseProducts, removeAllProducts} =
    useStoreProducts();

  const checkFavorite = useCallback(async () => {
    const fav = await checkIsFavorite(productId);
    setFavorite(fav);
  }, [productId]);

  const handleSetFavorite = async () => {
    if (favorite) {
      await removeFavorite(productId);
    } else {
      await addFavorite(data!);
    }
    checkFavorite();
  };

  useFocusEffect(
    useCallback(() => {
      removeAllProducts();
    }, [removeAllProducts]),
  );

  useEffect(() => {
    checkFavorite();
  }, [checkFavorite]);

  return (
    <>
      <View style={styles.container}>
        <View>
          <ProductImage
            image={data?.image || ''}
            isFavorite={favorite}
            isPending={isPending}
            onPressFavorite={() => handleSetFavorite()}
          />
          <ProductInfo
            title={data?.title || ''}
            description={data?.description || ''}
            category={data?.category as Category}
            rating={data?.rating || {rate: 0, count: 0}}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <ProductCounter
          price={data?.price || 0}
          products={products}
          increase={increaseProducts}
          decrease={decreaseProducts}
          count={data?.rating.count || 0}
        />
        <Button title="colocar no ticket" onPress={() => {}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: theme.colors.secondary,
  },
});
