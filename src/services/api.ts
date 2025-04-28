import {Product} from '@/types/product';
import axios from 'axios';

export async function getProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(
    'https://fakestoreapi.com/products',
  );
  return response.data;
}

export async function getProductById(id: number): Promise<Product> {
  const response = await axios.get<Product>(
    `https://fakestoreapi.com/products/${id}`,
  );
  return response.data;
}
