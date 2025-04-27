import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useGetProducts} from '@/hooks/useGetProducts';
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
      <Text style={styles.returnText}>
        Opa, algo de errado aconteceu aqui, tente novamente mais tarde.
      </Text>
    );
  }
  if (data?.length === 0) {
    return (
      <Text style={styles.returnText}>
        Eita, nenhum produto está disponível.
      </Text>
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
    marginTop: 10,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  returnText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#333',
    textTransform: 'lowercase',
  },
});
