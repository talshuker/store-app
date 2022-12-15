import React from "react";
import {
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";


function ShoppingCartItem(props) {
  return (
    <div>
          <MDBRow className="justify-content-between align-items-center">
            <MDBCol md="2" lg="2" xl="2">
              <MDBCardImage className="rounded-3" fluid
                src={props.product.itemPicture}
                alt={props.product.title} />
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3">
              <p className="lead fw-normal mb-2">{props.product.title}</p>
              <p>
                <span className="text-muted">Description: </span> {props.product.description} {" "}
              </p>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="2" className="d-flex align-items-center">
              <MDBInput type="number" min="0" defaultValue={props.getProductAmount(props.product)} size="sm" onClick={(e)=>props.setProductInCart(props.product, parseInt(e.target.value))} />
              </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
              <MDBTypography tag="h5" className="mb-0">
                {props.product.price}$
              </MDBTypography>
            </MDBCol>

            <MDBCol md="1" lg="1" xl="1" className="offset-lg-1">
                <MDBIcon icon="times" onClick={() => props.setProductInCart(props.product, 0)}/>
            </MDBCol>
          </MDBRow>
        
    </div>
  )
}

export default ShoppingCartItem;