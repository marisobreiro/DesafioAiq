import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import theme from '@/config/theme';
import {Add, Remove} from '@/assets/icons';
import {Paragraph} from '@/components';
import {formatCurrency} from '@/utils/formatters';

type ProductCounterProps = {
  count: number;
  price: number;
  products: number;
  increase: () => void;
  decrease: () => void;
};

export function ProductCounter({
  count,
  price,
  products,
  increase,
  decrease,
}: ProductCounterProps) {
  const size = 36;
  const color = theme.colors.terciary;
  return (
    <View>
      <View style={styles.total}>
        <Paragraph fontSize={theme.fontSizes.large}>valor total </Paragraph>
        <Text style={styles.totalText}>{formatCurrency(price)}</Text>
      </View>
      <View style={styles.counter}>
        <TouchableOpacity onPress={() => decrease()}>
          <Remove width={size} height={size} stroke={color} />
        </TouchableOpacity>
        <Paragraph style={styles.counterValue}>{products}</Paragraph>

        <TouchableOpacity
          onPress={() => increase()}
          disabled={products >= count}>
          <Add width={size} height={size} stroke={color} />
        </TouchableOpacity>
      </View>
      {products >= count && (
        <Paragraph style={styles.counterText}>
          Limite de produtos atingido
        </Paragraph>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    bottom: 0,
    paddingTop: 10,
    position: 'absolute',
    width: '100%',
  },
  total: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  totalText: {
    fontFamily: 'Nunito-Bold',
    fontSize: theme.fontSizes.large,
    color: theme.colors.success,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  counterValue: {
    fontSize: theme.fontSizes.large,
    marginHorizontal: 50,
  },
  counterText: {
    alignSelf: 'center',
    marginBottom: 10,
  },
});
