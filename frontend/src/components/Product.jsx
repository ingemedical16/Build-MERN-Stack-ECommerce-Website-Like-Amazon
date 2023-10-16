/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useContext } from 'react';
import { store } from '../Store/StoreProvider';
import { ACTIONS } from '../Store/action';
import axios from 'axios';
const Product = (props) => {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(store);
  const {
    cart: { cartItems },
  } = state;
  const { CART_ADD_ITEM } = ACTIONS;
  const addToCardHandler = async () => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/v2/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: CART_ADD_ITEM,
      payload: { ...product, quantity },
    });
  };
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>

        <Button
          className={`${product.countInStock > 0 ? '' : 'bg-danger'}`}
          disabled={!(product.countInStock > 0)}
          onClick={addToCardHandler}
        >
          {product.countInStock > 0 ? 'Add to cart' : 'Unavailable'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
