import React from 'react';
import {View, StyleSheet} from 'react-native';

interface SeparatorProps {
  height?: number;
  color?: string;
  marginVertical?: number;
  marginHorizontal?: number;
}

export function Separator({
  height = StyleSheet.hairlineWidth, // linha fininha por padrão
  color = '#ccc',
  marginVertical = 8,
  marginHorizontal = 0,
}: SeparatorProps) {
  return (
    <View
      style={{
        height,
        backgroundColor: color,
        marginVertical,
        marginHorizontal,
      }}
    />
  );
}
