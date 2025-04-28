import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Paragraph} from '../Paragraph/Paragraph';

type FilterProps = {
  backgroundColor: string;
  color: string;
  title: string;
  onPress: () => void;
};

export function Filter({backgroundColor, color, title, onPress}: FilterProps) {
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
  },
});
