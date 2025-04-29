import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

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
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Paragraph fontSize={theme.fontSizes.large}>valor total </Paragraph>
        <Paragraph style={styles.totalText}>
          {formatCurrency(price * products)}
        </Paragraph>
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
        {products >= count && (
          <Paragraph style={styles.counterText}>
            Limite de produtos atingido
          </Paragraph>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.secondary,
    paddingTop: 10,
  },
  totalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },
  totalText: {
    fontFamily: 'Nunito-Bold',
    fontSize: theme.fontSizes.large,
    color: theme.colors.success,
    textTransform: 'capitalize',
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
