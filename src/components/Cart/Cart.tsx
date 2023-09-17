import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { useCart } from '../../hooks/useCart';

export const CartIcon = () => {
  const { cart } = useCart();
  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1000,
        padding: '10px',
        backgroundColor: 'black',
        borderRadius: '50%',
      }}
    >
      <IconButton color='primary'>
        <Badge badgeContent={cart.length} color='error'>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};
