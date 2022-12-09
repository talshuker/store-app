import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const styles = {
    card: {
        //   backgroundColor: '#B7E0F2',
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
            <Card.Img variant="top" src={props.itemPicture} style={styles.cardImage} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.price}$</Card.Subtitle>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="primary" onClick={() => props.addToCart(props.title)}>Add</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;