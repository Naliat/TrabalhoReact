import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './src/pages/Cart';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livro/:id" element={<ProductDetails />} />
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
