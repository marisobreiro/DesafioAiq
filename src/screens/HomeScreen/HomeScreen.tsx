import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import theme from '@/config/theme';
import {RootStackParamList} from '@/config/navigation';
import {Filter, Layout} from '@/components';
import {Category, categoryTranslations} from '@/types/categories';

import {CardSection, FavoriteButton, ProductList} from './components';
import {logSelectContentEvent} from '@/utils/analytics';

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
    logSelectContentEvent({
      content_type: 'home-screen:product-detail',
      item_id: JSON.stringify(productId),
    });
    navigation.navigate('ProductDetailsScreen', {productId});
  };

  const handlePressFilter = (item: any) => {
    logSelectContentEvent({
      content_type: 'home-screen:filter',
      item_id: item,
    });

    if (item.key === 'favorites') {
      setShowFavorites(prev => !prev);
    } else {
      setSelectedCategory(prev =>
        prev === item.key ? null : (item.key as Category),
      );
    }
  };

  const handlePressFavButton = () => {
    logSelectContentEvent({
      content_type: 'home-screen:button',
      item_id: 'favorite',
    });

    setShowFavorites(prev => !prev);
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
                    onPress={() => handlePressFilter(item)}
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
          <FavoriteButton onPress={() => handlePressFavButton()} />
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
