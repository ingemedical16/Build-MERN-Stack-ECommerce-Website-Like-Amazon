/* eslint-disable react/prop-types */
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useContext } from 'react';
import { store } from '../Store/StoreProvider';
import { ACTIONS } from '../Store/action';
const Product = (props) => {
  // eslint-disable-next-line react/prop-types
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
    <Card>
      <Link
        to={`/product/${
          // eslint-disable-next-line react/prop-types
          product.slug
        }`}
      >
        <img
          className="card-img-top"
          src={
            // eslint-disable-next-line react/prop-types
            product.image
          }
          alt={
            // eslint-disable-next-line react/prop-types
            product.name
          }
        />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${
            // eslint-disable-next-line react/prop-types
            product.slug
          }`}
        >
          <Card.Title>
            {
              // eslint-disable-next-line react/prop-types
              product.name
            }
          </Card.Title>
        </Link>
        <Rating
          rating={
            // eslint-disable-next-line react/prop-types
            product.rating
          }
          numReviews={
            // eslint-disable-next-line react/prop-types
            product.numReviews
          }
        />
        <Card.Text>
          $
          {
            // eslint-disable-next-line react/prop-types
            product.price
          }
        </Card.Text>

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
