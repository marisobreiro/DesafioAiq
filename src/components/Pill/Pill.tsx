import React from 'react';
import {StyleSheet, View} from 'react-native';

import theme from '@/config/theme';
import {Category, categoryTranslations} from '@/types/categories';
import {Paragraph} from '../Paragraph/Paragraph';

export function Pill({category}: {category: Category}) {
  const translatedCategory = categoryTranslations[category];

  return (
    <View style={styles.container}>
      <Paragraph
        fontSize={theme.fontSizes.small}
        color={theme.colors.secondary}>
        {translatedCategory}
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.backgroundSecondary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.large,
  },
});
