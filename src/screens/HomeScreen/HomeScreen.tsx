import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import theme from '@/config/theme';
import {BadgeDiscont} from '@/assets/icons';
import {Card, Layout, Paragraph} from '@/components';

import {ProductList} from './components';

export function HomeScreen() {
  const navigation = useNavigation();

  const handleProductPress = (productId: number) => {
    navigation.navigate('ProductDetails', {productId});
  };

  return (
    <Layout
      children={
        <View style={styles.container}>
          <View style={styles.content}>
            <Card
              children={
                <View>
                  <View style={styles.card}>
                    <BadgeDiscont
                      width={theme.fontSizes.icon}
                      height={theme.fontSizes.icon}
                      stroke={theme.colors.primary}
                    />
                    <View>
                      <Paragraph
                        fontFamily={theme.fonts.bold}
                        style={styles.cardTitle}>
                        50% OFF pra sua criança interior
                      </Paragraph>
                    </View>
                  </View>
                  <Image
                    style={styles.banner}
                    source={require('../../assets/banners/bannerHome.png')}
                    resizeMode="contain"
                  />
                </View>
              }
            />
            <ProductList onPressItem={handleProductPress} />
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
  banner: {
    borderRadius: theme.borderRadius.medium,
    marginTop: 10,
    resizeMode: 'cover',
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    marginLeft: theme.spacing.sm,
  },
});
