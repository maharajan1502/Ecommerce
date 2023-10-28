import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./Components/footer/Footer";
import menban from './Components/Assets/images/menban1.png'
import womenban from './Components/Assets/images/women-banner.avif'
import kidsban from './Components/Assets/images/kids-ban2.jpg'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={menban} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={womenban} category="women" />} />
          <Route path='/Kids' element={<ShopCategory banner={ kidsban} category="Kids" />} />
          <Route path='/Product' element={<Product />}>
            <Route path=':ProductId' element={<Product />} />
            </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


