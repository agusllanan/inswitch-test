import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { CartProvider } from './contexts';
import { ProductDetails } from './components/ProductDetails';
import { ProductList } from './components/ProductList';
import { CartIcon } from './components/Cart/Cart';
import './global.css';

export const App = () => {
  return (
    <CartProvider>
      <CartIcon />
      <Router>
        <Routes>
          <Route path='*' element={<Navigate to='/productos' replace />} />
          <Route path='/productos' Component={ProductList} />
          <Route path='/productos/:id' Component={ProductDetails} />
        </Routes>
      </Router>
    </CartProvider>
  );
};
