import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BadgeDiscont} from '@/assets/icons';
import {Card, Layout} from '@/components';

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
                    <BadgeDiscont width={24} height={24} stroke={'#7B1FA2'} />
                    <View>
                      <Text style={styles.cardText}>
                        50% OFF pra sua criança interior
                      </Text>
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
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  banner: {
    borderRadius: 10,
    marginTop: 10,
    resizeMode: 'cover',
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    color: '#333',
    marginLeft: 10,
  },
});
