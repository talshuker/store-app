import React, { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    
   const isExist = cart.find(function(currItem) {
      if(currItem.title == product.title)
        return true;
    });

    if(!isExist) {
      setCart(cart => [...cart, product]);
    } 
    product.amount++;

    console.log(cart);
  };

  return (
    <div>
    <NavBar cartSize={()=> cart.reduce((total, product) => (product.amount + total), 0)} />
    <Routes>
      <Route exact path='/' element={<Products addToCart={addToCart}/>} />
      <Route path='/cart' element={<Cart items={cart}/>} />
    </Routes>
  </div>
  )
};

export default App;
