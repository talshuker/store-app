import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Button } from 'react-bootstrap';
import { BsCart2 } from "react-icons/bs";
import { Routes, useNavigate, Route } from "react-router-dom";
import Cart from "./Cart";
import App from "../App";

const NavBar = (props) => {
    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //     console.log("move");
    //    let path = "/Cart"; 
    //    navigate(path);
    // }
    
    return (
        <Navbar style={{ backgroundColor: "#7393B3" }}>
            <Container>
                <Navbar.Brand>Amit and Tal store</Navbar.Brand>
                <div style={{ position: "relative" }}>
                    <Button onClick={()=>/*routeChange*/console.log("hello")}><BsCart2/></Button>
                    <span style={{ position: "absolute", fontSize: "10px" }}>{!props.cartSize ? '' : props.cartSize}</span>
                </div>
            </Container>
            {/* <Routes>
                    <Route path="/" exact component={App} />
                    <Route path="/Cart" component={Cart} />
            </Routes> */}
        </Navbar>
    );
};

export default NavBar;