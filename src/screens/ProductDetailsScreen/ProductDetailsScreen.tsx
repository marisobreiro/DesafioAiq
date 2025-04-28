import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Button} from '@/components';
import {useGetProductById} from '@/hooks/useGetProductById';
import {Category} from '@/services/api';

import {ProductImage} from './components/ProductImage/ProductImage';
import {ProductInfo} from './components/ProductInfo/ProductInfo';
import {ProductCounter} from './components/ProductCounter/ProductCounter';
import {
  favoritesStore,
  useFavoritesStore,
  useStore,
  useStoreBears,
} from '@/stores/favorites';

export function ProductDetailsScreen({route}) {
  // const [isFavorite, setIsFavorite] = useState(false);
  const {productId} = route.params;
  const {data, isError, isPending} = useGetProductById(productId);
  const bears = useStoreBears(state => state.bears);
  const increasePopulation = useStoreBears(state => state.increasePopulation);
  const decreasePopulation = useStoreBears(state => state.decreasePopulation);

  // const {addFavorite, removeFavorite, isFavorite} = useFavoritesStore();

  const handleSetFavorite = id => {
    // if (isFavorite(id)) {
    //   removeFavorite(id);
    //   console.log('removeu');
    // } else {
    //   if (data) {
    //     addFavorite(data);
    //   }
    console.log('adicionou');
  };

  console.log(data?.rating);

  return (
    <View style={styles.container}>
      <View>
        <ProductImage
          image={data?.image || ''}
          isFavorite={false}
          isPending={isPending}
          onPressFavorite={() => handleSetFavorite(productId)}
        />
        <ProductInfo
          title={data?.title || ''}
          description={data?.description || ''}
          category={data?.category as Category}
          rating={data?.rating || {rate: 0, count: 0}}
        />
      </View>
      <View style={{}}>
        <ProductCounter
          price={data?.price || 0}
          products={bears}
          increase={increasePopulation}
          decrease={decreasePopulation}
          count={data?.rating.count || 0}
        />
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
