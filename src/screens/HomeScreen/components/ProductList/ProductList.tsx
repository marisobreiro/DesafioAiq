import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';

import theme from '@/config/theme';
import {useGetProducts} from '@/hooks/useGetProducts';
import {Paragraph} from '@/components';
import {getFavorites} from '@/stores/favorites';
import {Category, Product} from '@/types';

import {FavoriteButton} from '../FavoriteButton/FavoriteButton';
import {ProductItem} from '../ProductItem/ProductItem';

type ProductListProps = {
  showFavorites: boolean;
  onPressItem: (id: number) => void;
  selectedCategory: Category | null;
};

export function ProductList({
  showFavorites,
  selectedCategory,
  onPressItem,
}: ProductListProps) {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const {data, isError, isPending} = useGetProducts();

  useEffect(() => {
    if (showFavorites) {
      loadFavorites();
    }
  }, [showFavorites]);

  const loadFavorites = async () => {
    const favs = await getFavorites();
    setFavorites(favs);
  };

  if (isPending) {
    return <ActivityIndicator />;
  }
  if (isError) {
    return (
      <Paragraph fontFamily={theme.fonts.bold}>
        Opa, algo de errado aconteceu aqui, tente novamente mais tarde.
      </Paragraph>
    );
  }
  if (data?.length === 0) {
    return (
      <Paragraph fontFamily={theme.fonts.bold}>
        Eita, nenhum produto está disponível.
      </Paragraph>
    );
  }
  let productsToDisplay = showFavorites ? favorites : data || [];

  if (selectedCategory) {
    productsToDisplay = productsToDisplay.filter(
      product => product.category === selectedCategory,
    );
  }

  return (
    <>
      <FlatList
        style={styles.list}
        data={productsToDisplay}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.content}>
            <ProductItem item={item} onPressItem={() => onPressItem(item.id)} />
          </View>
        )}
      />
      <FavoriteButton />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: theme.spacing.sm,
  },
  content: {
    flex: 1,
    padding: theme.spacing.sm,
  },
});
