import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../types';
import { CardComponent } from '../Card';
import { Typography, Grid } from '@mui/material';

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get<Product[]>(
        'https://fakestoreapi.com/products',
      );
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Typography
        variant='h3'
        component='div'
        align='center'
        style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}
      >
        Productos Inswitch
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent='center'
        alignItems='center'
        style={{ padding: '10px', width: '90%', margin: 'auto' }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <CardComponent product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
