import React from "react";
import { Container, Navbar } from 'react-bootstrap';
import { BsCart2 } from "react-icons/bs";

const NavBar = (props) => {
    return (
        <Navbar style={{ backgroundColor: "#7393B3" }}>
            <Container>
                <Navbar.Brand>Amit and Tal store</Navbar.Brand>
                <div style={{ position: "relative" }}>
                    <BsCart2 />
                    <span style={{ position: "absolute", fontSize: "10px" }}>{!props.cartSize ? '' : props.cartSize}</span>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavBar;