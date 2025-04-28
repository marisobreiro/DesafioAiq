import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import theme from '@/config/theme';
import {RootStackParamList} from '@/config/navigation';
import {Funnel} from '@/assets/icons';
import {Filter, Layout} from '@/components';
import {Category, categoryTranslations} from '@/types/categories';

import {CardSection, ProductList} from './components';

export function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const handleProductPress = (productId: number) => {
    navigation.navigate('ProductDetailsScreen', {productId});
  };

  return (
    <Layout
      children={
        <View style={styles.container}>
          <View style={styles.content}>
            <CardSection />
            <View style={styles.filter}>
              <Filter
                backgroundColor={theme.colors.primary}
                color={theme.colors.secondary}
                title="favoritos"
                onPress={() => setShowFavorites(prev => !prev)}
              />
              {Object.entries(categoryTranslations).map(([key, label]) => (
                <Filter
                  key={key}
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.secondary}
                  title={label}
                  onPress={() =>
                    setSelectedCategory(prev =>
                      prev === key ? null : (key as Category),
                    )
                  }
                />
              ))}
              <Funnel
                width={20}
                height={20}
                stroke={theme.colors.textSecondary}
              />
            </View>
            <ProductList
              onPressItem={handleProductPress}
              showFavorites={showFavorites}
              selectedCategory={selectedCategory}
            />
          </View>
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
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
