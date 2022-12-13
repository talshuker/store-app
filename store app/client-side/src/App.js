import React, { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState([]);
  let [productsAmount, setProductsAmount] =useState(0);

  const addToCart = (product) => {
    let updatedCart;
    const currProductIndex = cart.findIndex(currItem => currItem.title === product.title);
    if (currProductIndex !== -1) { 
      updatedCart = cart.map(currItem => currItem.title === product.title ? {...currItem, amount: currItem.amount+=1 } : currItem);
    } else {
      product.amount++;
      updatedCart = [...cart, product]
    }
    setProductsAmount(updatedCart.reduce((total, product) => (product.amount + total), 0));
    setCart(updatedCart);
  };

  return (
    <div>
      <NavBar cartSize={productsAmount} />
      <Routes>
        <Route exact path='/' element={<Products addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart items={cart} />} />
      </Routes>
    </div>
  )
};

export default App;
