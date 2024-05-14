import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import NotFound from './components/notfound/NotFound';
import Cart from './pages/cart/Cart';
import Products from './components/products/Products';
const App = () => {
    return (
        <div>
            <BrowserRouter>   
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
