import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Api from '../api/api';

const Products = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadData() {
            const products = await Api.get('/products', {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            setData(products.data);
        }
        loadData();
    }, []);


    return (
        <div>
            <Container className='p-4'>
                <Row xs={1} md={3} className="g-4">
                    {data && data.map((product) => <Col><ProductCard product={product} addToCart={props.addToCart} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default Products;