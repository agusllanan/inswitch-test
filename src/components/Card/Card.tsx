import { Product } from '../../types';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Container,
} from '@mui/material';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

export const CardComponent = ({ product }: { product: Product }) => {
  const { addToCart, removeFromCart, isProductInCart } = useCart();

  return (
    <>
      <Card
        key={product.id}
        variant='outlined'
        style={{
          width: '100%',
          height: '420px',
          display: 'inline-block',
          textAlign: 'center',
          verticalAlign: 'top',
          border: '1px solid lightgray',
          borderRadius: '10px',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          transition: '0.3s',
          cursor: 'pointer',
        }}
      >
        <CardContent>
          <CardMedia
            component='img'
            height='194'
            image={product.image}
            alt={product.title}
          />
          <LinesEllipsis
            maxLine={1}
            text={product.title}
            ellipsis='...'
            trimRight
            style={{
              width: '100%',
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '20px',
              marginBottom: '10px',
              marginTop: '10px',
            }}
          />
          <Typography variant='body1' color='textSecondary'>
            ${product.price}
          </Typography>
        </CardContent>
        <Container
          sx={{
            width: '100%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            direction: 'row',
            flexWrap: 'wrap',
          }}
        >
          <CardActions
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant='contained'
              color='secondary'
              size='small'
              component={Link}
              to={`/productos/${product.id}`}
              sx={{ width: '300px' }}
            >
              Ver detalles
            </Button>
          </CardActions>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {!isProductInCart(product.id) ? (
              <Button
                variant='contained'
                size='small'
                onClick={() => addToCart(product)}
                color='primary'
                sx={{ width: '300px' }}
              >
                Agregar al carrito
              </Button>
            ) : (
              <Button
                variant='outlined'
                color='error'
                size='small'
                onClick={() => removeFromCart(product.id)}
                sx={{ width: '300px' }}
              >
                Quitar del carrito
              </Button>
            )}
          </CardActions>
        </Container>
      </Card>
    </>
  );
};
