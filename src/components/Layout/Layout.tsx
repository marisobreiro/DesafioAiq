import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({children}: LayoutProps) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
