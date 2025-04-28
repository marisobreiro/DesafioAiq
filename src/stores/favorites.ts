import AsyncStorage from '@react-native-async-storage/async-storage';
import {Product} from '@/types';

const FAVORITES_KEY = 'favorites-products';

export const getFavorites = async (): Promise<Product[]> => {
  const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = async (product: Product): Promise<void> => {
  const favorites = await getFavorites();
  const isFavorite = favorites.some(item => item.id === product.id);

  if (!isFavorite) {
    const updatedFavorites = [...favorites, product];
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  }
};

export const removeFavorite = async (productId: number): Promise<void> => {
  const favorites = await getFavorites();
  const updatedFavorites = favorites.filter(item => item.id !== productId);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};

export const clearFavorites = async (): Promise<void> => {
  await AsyncStorage.removeItem(FAVORITES_KEY);
};

export const checkIsFavorite = async (productId: number): Promise<boolean> => {
  const favorites = await getFavorites();
  return favorites.some(item => item.id === productId);
};
