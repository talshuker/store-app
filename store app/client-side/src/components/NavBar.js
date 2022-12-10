import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import { BsCart2 } from "react-icons/bs";
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = (props) => {
    return (
        <Navbar style={{ backgroundColor: "#7393B3" }}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Amit and Tal store</Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="/cart">
                    <Navbar.Brand>
                        <div style={{ position: "relative" }}>
                            <BsCart2 />
                            <span style={{ position: "absolute", fontSize: "10px" }}>{!props.cartSize ? '' : props.cartSize}</span>
                        </div>
                    </Navbar.Brand>
                </LinkContainer>
            </Container>
        </Navbar>
    );
};

export default NavBar;