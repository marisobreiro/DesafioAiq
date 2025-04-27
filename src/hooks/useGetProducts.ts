import {useQuery} from '@tanstack/react-query';
import {getProducts} from '../services/api';

export function useGetProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
}
