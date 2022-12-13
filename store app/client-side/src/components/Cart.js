import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { Col } from 'react-bootstrap';
import Api from '../api/api';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

async function saveData(props) {
   await Api.post('/products/save/', {
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      items: props.items
  });
}

export default function Cart(props) {
  const totalAmount = (props.items.reduce((total, expense) => total = total + expense.amount * expense.price, 0));
  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
            </div>
            <div>
              {props.items.map((expense) => <Col><ShoppingCartItem product={expense} setProductInCart={props.setProductInCart} getProductAmount={props.getProductAmount}/></Col>)}
            </div>
            <MDBCard>
              <MDBCardBody>
                <MDBTypography tag="h5" className="fw-bold mb-0">
                  Total:
                </MDBTypography>
                <MDBTypography tag="h5" className="fw-bold mb-0">
                  {totalAmount}$
                </MDBTypography>
                <MDBBtn className="ms-3" style={{ float: 'right' }} color="info" block size="lg" onClick={() => saveData(props)}>
                  Send
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}