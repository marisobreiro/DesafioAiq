import React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {RootStack} from './src/config/navigation';

const Navigation = createStaticNavigation(RootStack);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
