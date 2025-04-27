import {useQuery} from '@tanstack/react-query';
import {getProductById} from '@/services/api';

export function useGetProductById(id: number) {
  return useQuery({
    queryKey: ['product'],
    queryFn: () => getProductById(id),
  });
}
