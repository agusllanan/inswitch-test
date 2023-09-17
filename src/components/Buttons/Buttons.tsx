import { useCart } from '../../hooks/useCart';
import { Product } from '../../types';
import { Button } from '@mui/material';

export const Buttons = ({ product }: { product: Product }) => {
  const { addToCart, removeFromCart, isProductInCart } = useCart();
  return (
    <>
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
    </>
  );
};
