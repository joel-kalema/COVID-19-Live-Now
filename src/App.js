import Header from './component/hearder';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import ProductList from './component/productList';
import ProductDetail from './component/productDetail';
import './component/componets.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <ProductList /> } />
          <Route path='/product/:productId' element={ <ProductDetail /> } />
          <Route>404 Not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
