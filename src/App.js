import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/hearder';
import Home from './component/productList';
import Detail from './component/productDetail';
import './component/componets.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
