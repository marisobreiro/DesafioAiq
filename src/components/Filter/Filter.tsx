import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Paragraph} from '../Paragraph/Paragraph';
import theme from '@/config/theme';

type FilterProps = {
  color: string;
  title: string;
  isActive: boolean;
  onPress: () => void;
};

export function Filter({color, title, isActive = false, onPress}: FilterProps) {
  const backgroundColor = isActive
    ? theme.colors.primary
    : theme.colors.textSecondary;
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      onPress={onPress}>
      <Paragraph color={color}>{title}</Paragraph>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginHorizontal: 2,
    height: 30,
  },
});
