import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export enum Category {
  MensClothing = "men's clothing",
  WomensClothing = "women's clothing",
  Jewelery = 'jewelery',
  Electronics = 'electronics',
}

export async function getProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(
    'https://fakestoreapi.com/products',
  );
  return response.data;
}
