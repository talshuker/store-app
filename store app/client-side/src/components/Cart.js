import React, { useState } from "react";
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
  MDBInput,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";

async function saveData(props, name, phoneNumber, email) {
  await Api.post('/cart/save/', {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    cart: {
      items: props.items,
      userDetails: {
        name,
        phoneNumber, 
        email
      }
    }

  });
}

export default function Cart(props) {
  const [nameValue, setNameValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [checkout, setCheckout] = useState(false);

  const toggleShow = () => setCheckout(!checkout);

  const totalAmount = (props.items.reduce((total, expense) => total = total + expense.amount * expense.price, 0));
  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="8" style={{"height": "100vh"}}>
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
            <div className="p-5">
              <div className="d-flex justify-content-between align-items-center mb-5">
                <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                  Shopping Cart
                </MDBTypography>
                <MDBTypography className="mb-0 text-muted">
                  {props.productsAmount} items
                </MDBTypography>
              </div>
            </div>

                <div>
                  {props.items.map((expense) => <Col><ShoppingCartItem product={expense} setProductInCart={props.setProductInCart} getProductAmount={props.getProductAmount} /></Col>)}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" className="bg-grey" style={{"height": "110vh"}}>
            <div className="p-5">
              <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                Summary
              </MDBTypography>

              <hr className="my-4" />

              <div className="d-flex justify-content-between mb-4">
                <MDBTypography tag="h5" className="text-uppercase">
                {props.productsAmount} items
                </MDBTypography>
                <MDBTypography tag="h5">{totalAmount}$</MDBTypography>
              </div>

              <MDBTypography tag="h7" className="text-uppercase mb-3">
                Name
              </MDBTypography>
              <div className="mb-3">
                <MDBInput value={nameValue} onChange={(e) => setNameValue(e.target.value)} size="sm"/>
              </div>
              <MDBTypography tag="h7" className="text-uppercase mb-3">
                Phone Number
              </MDBTypography>
              <div className="mb-3">
                <MDBInput value={phoneNumberValue} onChange={(e) => setPhoneNumberValue(e.target.value)} size="sm"/>
              </div>
              <MDBTypography tag="h7" className="text-uppercase mb-3">
                E-mail
              </MDBTypography>
              <div className="mb-3">
                <MDBInput value={emailValue} onChange={(e) => setEmailValue(e.target.value)} size="sm"/>
              </div>

              <hr className="my-4" />

              <div className="d-flex justify-content-between mb-3">
                <MDBTypography tag="h5" className="text-uppercase">
                  Total price
                </MDBTypography>
                <MDBTypography tag="h5">{totalAmount}$</MDBTypography>
              </div>

              <MDBBtn style={{ float: 'right',  height: 50, marginTop: 10}} color="dark" block size="lg" onClick={() => {saveData(props, nameValue, phoneNumberValue, emailValue); toggleShow();}}>
                Checkout
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBModal show={checkout} setShow={setCheckout} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Your order has been received</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </section>
  );
}