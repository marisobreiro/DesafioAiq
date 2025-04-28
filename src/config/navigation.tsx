import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, ProductDetailsScreen} from '@/screens';
import {Aiq} from '@/assets/icons';
import {HeaderLeft, HeaderRight} from '../components/Header/Header';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProductDetailsScreen: {productId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerLeft: HomeHeaderLeft,
          headerRight: HomeHeaderRight,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerBackTitle: '',
          headerBackVisible: true,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7B1FA2',
          },
          headerTitle: HeaderCenter,
        }}
      />
    </Stack.Navigator>
  );
}

const HomeHeaderLeft = () => {
  return <HeaderLeft />;
};

const HomeHeaderRight = () => {
  return <HeaderRight />;
};

const HeaderCenter = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{alignItems: 'center'}}>
      <Aiq width={24} height={24} />
    </View>
  );
};
