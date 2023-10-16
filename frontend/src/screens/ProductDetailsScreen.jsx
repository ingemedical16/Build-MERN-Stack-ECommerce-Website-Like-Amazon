import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsScreen from '../components/ProductDetails';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAIL = 'FETCH_FAIL';

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, product: action.payload, loading: false };
    case FETCH_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    product: {},
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_REQUEST });
      try {
        const res = await axios.get(`/api/v2/products/slug/${slug}`);
        dispatch({
          type: FETCH_SUCCESS,
          payload: res.data,
        });
      } catch (error) {
        console.log(error.message);
        dispatch({
          type: FETCH_FAIL,
          payload:  getError(error),
        });
      }
    };
    fetchData();
  }, [slug]);
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <ProductDetailsScreen product={product} />
    </div>
  );
};

export default ProductScreen;
