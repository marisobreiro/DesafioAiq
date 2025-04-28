import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import theme from '@/config/theme';
import {RootStackParamList} from '@/config/navigation';
import {Filter, Layout} from '@/components';
import {Category, categoryTranslations} from '@/types/categories';

import {CardSection, FavoriteButton, ProductList} from './components';

export function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const filterOptions = [
    {key: 'favorites', label: 'Favoritos'},
    ...Object.entries(categoryTranslations).map(([key, label]) => ({
      key,
      label,
    })),
  ];

  const handleProductPress = (productId: number) => {
    navigation.navigate('ProductDetailsScreen', {productId});
  };

  return (
    <Layout
      children={
        <View style={styles.container}>
          <View style={styles.content}>
            <CardSection />
            <View>
              <FlatList
                data={filterOptions}
                keyExtractor={item => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.filterList}
                renderItem={({item}) => (
                  <Filter
                    isActive={
                      item.key === 'favorites'
                        ? showFavorites
                        : selectedCategory === item.key
                    }
                    color={theme.colors.secondary}
                    title={item.label}
                    onPress={() => {
                      if (item.key === 'favorites') {
                        setShowFavorites(prev => !prev);
                      } else {
                        setSelectedCategory(prev =>
                          prev === item.key ? null : (item.key as Category),
                        );
                      }
                    }}
                  />
                )}
              />
            </View>
            <ProductList
              onPressItem={handleProductPress}
              showFavorites={showFavorites}
              selectedCategory={selectedCategory}
            />
          </View>
          <FavoriteButton onPress={() => setShowFavorites(prev => !prev)} />
        </View>
      }
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 20,
  },
  content: {
    justifyContent: 'space-between',
    padding: 10,
  },
  filterList: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
