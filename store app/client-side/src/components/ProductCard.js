import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const styles = {
    card: {
        borderRadius: 55,
        padding: '3rem',
        width: '18rem'
    },
    cardImage: {
        objectFit: 'cover',
        height: '11rem',
        borderRadius: 55
    }
};

function ProductCard(props) {
    return (
        <Card style={styles.card}>
            <Card.Img variant="top" src={props.product.itemPicture} style={styles.cardImage} />
            <Card.Body>
                <Card.Title>{props.product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.product.price}$</Card.Subtitle>
                <Card.Text>
                    {props.product.description}
                </Card.Text>
                <Button variant="primary" onClick={() => props.addToCart(props.product)}>Add</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;