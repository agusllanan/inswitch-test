import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from '../types';

const fetchProductDetail = async (id: string): Promise<Product> => {
  const { data } = await axios.get<Product>(
    `https://fakestoreapi.com/products/${id}`
  );
  return data;
};

export const useProductDetails = (id: string) => {
  return useQuery<Product, Error>(['product', id], () => fetchProductDetail(id));
};
