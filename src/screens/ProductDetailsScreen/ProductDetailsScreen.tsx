import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Button} from '@/components';
import {useGetProductById} from '@/hooks/useGetProductById';
import {Category} from '@/services/api';

import {ProductImage} from './components/ProductImage/ProductImage';
import {ProductInfo} from './components/ProductInfo/ProductInfo';
import {ProductCounter} from './components/ProductCounter/ProductCounter';

export function ProductDetailsScreen({route}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const {productId} = route.params;
  const {data, isError, isPending} = useGetProductById(productId);

  const handleSetFavorite = () => {
    setIsFavorite(true);
  };

  return (
    <View style={styles.container}>
      <View>
        <ProductImage
          image={data?.image || ''}
          isFavorite={isFavorite}
          isPending={isPending}
          onPressFavorite={handleSetFavorite}
        />
        <ProductInfo
          title={data?.title || ''}
          description={data?.description || ''}
          category={data?.category as Category}
          rating={data?.rating || {rate: 0, count: 0}}
        />
      </View>
      <View>
        <ProductCounter price={data?.price || 0} />
        <Button title="colocar no ticket" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
