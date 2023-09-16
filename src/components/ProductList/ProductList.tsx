import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

const ProductList: React.FC = () => {
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
      <h2>Productos</h2>

      {products.map((product) => (
        <Card
          key={product.id}
          variant='outlined'
          style={{
            margin: '10px',
            padding: '10px',
            width: '20%',
            display: 'inline-block',
            textAlign: 'center',
            verticalAlign: 'top',
            marginBottom: '10px',
            marginTop: '10px',
            border: '1px solid black',
            borderRadius: '10px',
          }}
        >
          <CardContent>
            <Typography variant='h5' component='div'>
              {product.title}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              {product.price}
            </Typography>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '20%' }}
            />
          </CardContent>
          <CardActions>
            <Button
              size='small'
              component={Link}
              to={`/productos/${product.id}`}
            >
              Ver detalles
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
