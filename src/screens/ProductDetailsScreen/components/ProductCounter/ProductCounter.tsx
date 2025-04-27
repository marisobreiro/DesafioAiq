import {Add, Remove} from '@/assets/icons';
import {Separator} from '@/components';
import {Product} from '@/services/api';
import {formatCurrency} from '@/utils/formatters';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export function ProductCounter({price}: Pick<Product, 'price'>) {
  const size = 36;
  const color = '#00A296';
  return (
    <>
      <Separator marginVertical={10} />

      <View style={styles.total}>
        <Text style={styles.text}>valor total </Text>
        <Text style={styles.totalText}>{formatCurrency(price)}</Text>
      </View>
      <View style={styles.counter}>
        <TouchableOpacity>
          <Add width={size} height={size} stroke={color} />
        </TouchableOpacity>

        <Text style={styles.subtitle}>1</Text>
        <TouchableOpacity>
          <Remove width={size} height={size} stroke={color} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  total: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: '#02A117',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontFamily: 'Nunito-Regular',
    textTransform: 'lowercase',
    marginHorizontal: 50,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    textTransform: 'lowercase',
    textAlign: 'justify',
  },
});
