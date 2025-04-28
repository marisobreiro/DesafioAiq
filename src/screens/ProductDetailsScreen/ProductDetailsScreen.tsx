import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import theme from '@/config/theme';
import {Button} from '@/components';
import {useGetProductById} from '@/hooks/useGetProductById';
import {Category} from '@/services/api';
import {useStoreProducts} from '@/stores/products';

import {ProductImage} from './components/ProductImage/ProductImage';
import {ProductInfo} from './components/ProductInfo/ProductInfo';
import {ProductCounter} from './components/ProductCounter/ProductCounter';

export function ProductDetailsScreen({route}) {
  // const [isFavorite, setIsFavorite] = useState(false);
  const {productId} = route.params;
  const {data, isPending} = useGetProductById(productId);

  const {products, decreaseProducts, increaseProducts, removeAllProducts} =
    useStoreProducts();

  const handleSetFavorite = id => {};

  useFocusEffect(
    useCallback(() => {
      removeAllProducts();
    }, [removeAllProducts]),
  );

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
      <View style={styles.footer}>
        <ProductCounter
          price={data?.price || 0}
          products={products}
          increase={increaseProducts}
          decrease={decreaseProducts}
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
  footer: {
    backgroundColor: theme.colors.secondary,
  },
});
