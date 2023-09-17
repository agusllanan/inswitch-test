import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './contexts';
import { ProductDetails } from './components/ProductDetails';
import { ProductList } from './components/ProductList';
import { CartIcon } from './components/Cart/Cart';
import './global.css';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
