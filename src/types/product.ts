import {Category} from './categories';

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
