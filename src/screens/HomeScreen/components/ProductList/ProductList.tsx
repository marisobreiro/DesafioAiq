import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';

import theme from '@/config/theme';
import {useGetProducts} from '@/hooks/useGetProducts';
import {Paragraph} from '@/components';

import {FavoriteButton} from '../FavoriteButton/FavoriteButton';
import {ProductItem} from '../ProductItem/ProductItem';

type ProductListProps = {
  onPressItem: (id: number) => void;
};

export function ProductList({onPressItem}: ProductListProps) {
  const {data, isError, isPending} = useGetProducts();

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

  return (
    <>
      <FlatList
        style={styles.list}
        data={data}
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
