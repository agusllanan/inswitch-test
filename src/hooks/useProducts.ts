
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from '../types';

export const useProducts = () => {
  return useQuery<Product[], Error>(['products'], async () => {
    const { data } = await axios.get<Product[]>('https://fakestoreapi.com/products');
    return data;
  });
};
