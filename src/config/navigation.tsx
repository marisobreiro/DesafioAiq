import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, ProductDetailsScreen} from '@/screens';
import {HeaderLeft, HeaderRight} from '../components/Header/Header';
import {Aiq, Back} from '@/assets/icons';
import {View} from 'react-native';

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: true,
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
        headerTitle: '',
      },
    },
    ProductDetails: {
      screen: ProductDetailsScreen,
      options: {
        headerShown: true,
        headerBackButtonDisplayMode: 'minimal',
        headerBackTitleVisible: false,
        headerBackVisible: true,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#7B1FA2',
        },
        headerTitle: () => (
          <View style={{alignItems: 'center'}}>
            <Aiq width={24} height={24} />
          </View>
        ),
      },
    },
  },
});
