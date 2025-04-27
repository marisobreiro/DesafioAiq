import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {DollarSign, Heart, Star} from '@/assets/icons';
import {Card, Pill} from '@/components';
import {useGetProducts} from '@/hooks/useGetProducts';
import {FavoriteButton} from '../FavoriteButton/FavoriteButton';

export function ProductList() {
  const {data, isError, isPending} = useGetProducts();

  const isFavorite = true;

  if (isPending) {
    return <ActivityIndicator />;
  }
  if (isError) {
    return (
      <Text style={styles.cardText}>
        Opa, algo de errado aconteceu aqui, tente novamente mais tarde.
      </Text>
    );
  }
  if (data?.length === 0) {
    return (
      <Text style={styles.cardText}>Eita, nenhum produto está disponível.</Text>
    );
  }
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Card
              children={
                <View style={styles.cardContent}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.image}
                      resizeMode="center"
                      width={40}
                      height={40}
                    />
                  </View>
                  <View style={styles.cardTextContainer}>
                    <Text style={styles.cardText}>{item.title}</Text>
                    <Pill category={item.category} />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 15,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 10,
                          }}>
                          <DollarSign
                            width={18}
                            height={18}
                            stroke={'#7B1FA2'}
                          />
                          <Text style={styles.cardSecondaryText}>
                            {item.price}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Star
                            width={18}
                            height={18}
                            stroke={'#7B1FA2'}
                            style={{marginRight: 5}}
                          />
                          <Text style={styles.cardSecondaryText}>
                            {item.rating.rate}
                          </Text>
                        </View>
                      </View>
                      {isFavorite && (
                        <Heart
                          width={18}
                          height={18}
                          stroke={'#7B1FA2'}
                          style={{justifyContent: 'flex-end'}}
                        />
                      )}
                    </View>
                  </View>
                </View>
              }
            />
          </View>
        )}
      />
      <FavoriteButton />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    borderColor: '#7B1FA2',
    borderRadius: 60,
    borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    width: 60,
    marginRight: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
  cardTextContainer: {width: '80%'},
  cardText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#333',
  },
  cardSecondaryText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#333',
  },
});
