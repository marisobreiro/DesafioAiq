import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, ProductDetailsScreen} from '@/screens';
import {Aiq} from '@/assets/icons';
import {HeaderLeft, HeaderRight} from '../components/Header/Header';
import {LoginScreen} from '@/screens/LoginScreen/LoginScreen';
import {CadastroScreen} from '@/screens/CadastroScreen/CadastroScreen';
import {PerfilScreen} from '@/screens/PerfilScreen/PerfilScreen';
import theme from './theme';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProductDetailsScreen: {productId: number};
  LoginScreen: undefined;
  CadastroScreen: undefined;
  PerfilScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
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
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CadastroScreen"
        component={CadastroScreen}
        options={{
          headerBackVisible: true,
          headerTitle: '',
          headerTintColor: theme.colors.secondary,
          headerStyle: {backgroundColor: theme.colors.primary},
        }}
      />
      <Stack.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={{headerShown: false}}
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
