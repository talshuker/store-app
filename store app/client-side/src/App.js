import React, { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

const productsList = [
  { title: 'סבון', price: 15, amount: 0, description: 'חדש', itemPicture: require("../src/pics/pic1.jpg") },
  { title: 'שמן זית', price: 30, amount: 0, description: 'חצי מחיר רק היום', itemPicture: require("../src/pics/pic2.jpg") },
  { title: 'אבטיח', price: 20, amount: 0, description: 'טרי טרי', itemPicture: require("../src/pics/pic3.jpg") },
  { title: 'לחם', price: 10, amount: 0, description: 'אין על פחמימה', itemPicture: require("../src/pics/pic4.jpg") },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('Click')
    setCart(cart => [...cart, product]);
    console.log(cart)
  };

  return (
    <div>
    <NavBar cartSize={cart.length} />
    <Routes>
      <Route exact path='/' element={<Products items={productsList} addToCart={addToCart} />} />
      <Route path='/cart' element={<Cart items={productsList}/>} />
    </Routes>
  </div>
  )
};

export default App;
