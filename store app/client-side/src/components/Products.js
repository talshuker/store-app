import ProductCard from "./ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Products(props) {
    return (
        <div>
            <Container className='p-4'>
                <Row xs={1} md={3} className="g-4">
                    {props.items.map((expense) => <Col><ProductCard {...expense} addToCart={props.addToCart}/></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default Products;