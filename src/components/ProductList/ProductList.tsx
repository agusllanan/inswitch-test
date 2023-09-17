import { useProducts } from '../../hooks/useProducts';
import { CardComponent } from '../Card';
import { Typography, Grid, Skeleton } from '@mui/material';

export const ProductList = () => {
  const { data: products, isLoading, isError, error } = useProducts();

  if (isError) {
    return (
      <div>
        Error al cargar los detalles del producto: {(error as Error).message}
      </div>
    );
  }

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
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Skeleton variant='rectangular' height={400} />
                <Skeleton variant='text' />
                <Skeleton variant='text' />
              </Grid>
            ))
          : products?.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <CardComponent product={product} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};
