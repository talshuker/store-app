import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";


function ShoppingCartItem(props) {

    return (
        <div>
            <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src={props.itemPicture}
                  alt={props.title} />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">{props.title}</p>
                <p>
                  <span className="text-muted">Description: </span> {props.description} {" "}
                </p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2" onClick={()=>props.amount--}>
                  <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput min={0} defaultValue={props.amount} type="number" size="sm" />

                <MDBBtn color="link" className="px-2" onClick={()=>props.amount++}>
                  <MDBIcon fas icon="plus"/>
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                {props.price}$
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        </div>
    )
}

export default ShoppingCartItem;