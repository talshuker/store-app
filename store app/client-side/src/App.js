import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

const productsList = [
  { title: 'סבון', amount: 15, description: 'חדש', itemPicture: require("../src/pics/pic1.jpg") },
  { title: 'שמן זית', amount: 30, description: 'חצי מחיר רק היום', itemPicture: require("../src/pics/pic2.jpg") },
  { title: 'אבטיח', amount: 20, description: 'טרי טרי', itemPicture: require("../src/pics/pic3.jpg") },
  { title: 'לחם', amount: 10, description: 'אין על פחמימה', itemPicture: require("../src/pics/pic4.jpg") },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('Click')
    setCart(cart => [...cart, product]);
    console.log(cart)
  };

  return <div>
    {/* <NavBar cartSize={cart.length} />
    <Products items={productsList} addToCart={addToCart} /> */}
    <Cart items={productsList}/>
  </div>
};

export default App;
