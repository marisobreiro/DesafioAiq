import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RootStackNavigator} from '@/config/navigation';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
