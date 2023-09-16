import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetails/ProductDetails';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to='/productos' replace />} />
        <Route path='/productos' Component={ProductList} />
        <Route path='/productos/:id' Component={ProductDetail} />
      </Routes>
    </Router>
  );
};
