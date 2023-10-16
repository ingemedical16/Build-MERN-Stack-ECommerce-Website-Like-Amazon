/* eslint-disable react/prop-types */
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import Rating from './Rating';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { store } from '../Store/StoreProvider';
import { ACTIONS } from '../Store/action';

const ProductDetails = (props) => {
  const { product } = props;
  const { dispatch: ctxDispatch } = useContext(store);
  const { CART_ADD_ITEM } = ACTIONS;
  const addToCardHandler = () => {
    ctxDispatch({
      type: CART_ADD_ITEM,
      payload: { ...product, quantity: 1 },
    });
  };
  return (
    <Row>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <Col md={6}>
        <img className="img-large" src={product.image} alt={product.name} />
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h1>{product.name}</h1>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </ListGroup.Item>
          <ListGroup.Item>Price : ${product.price.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item>
            Description:
            <p>{product.description}</p>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>${product.price.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? (
                      <Badge bg="success">In Stock</Badge>
                    ) : (
                      <Badge bg="danger">Unavailable</Badge>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button onClick={addToCardHandler} variant="primary">
                      Add to Cart
                    </Button>
                  </div>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductDetails;