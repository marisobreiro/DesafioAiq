import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import theme from '@/config/theme';
import {BadgeDiscont} from '@/assets/icons';
import {Card, Paragraph} from '@/components';

export function CardSection() {
  return (
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
              <Paragraph fontFamily={theme.fonts.bold} style={styles.cardTitle}>
                50% OFF pra sua criança interior
              </Paragraph>
            </View>
          </View>
          <Image
            style={styles.banner}
            source={require('../../../../assets/banners/bannerHome.png')}
            resizeMode="contain"
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
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
