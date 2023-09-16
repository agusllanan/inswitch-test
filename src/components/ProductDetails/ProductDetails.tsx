import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import { Product } from '../../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const response = await axios.get<Product>(
        `https://fakestoreapi.com/products/${id}`,
      );
      setProduct(response.data);
    };

    fetchProductDetail();
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <Card variant='outlined' style={{ margin: '10px', padding: '10px' }}>
      <CardContent>
        <Typography variant='h4' component='div'>
          {product.title}
        </Typography>
        <Typography variant='h6' color='textSecondary'>
          {product.price}
        </Typography>
        <Typography variant='body1'>{product.description}</Typography>
        {/* ... muestra otros detalles del producto */}
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
