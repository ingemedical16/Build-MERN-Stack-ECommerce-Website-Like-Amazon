import axios from 'axios';
import { useEffect, useReducer } from 'react';
import {Row,Col} from 'react-bootstrap'

//import logger from 'use-reducer-logger';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAIL = 'FETCH_FAIL';

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case FETCH_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

function HomeScreen() {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    products: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_REQUEST });
      try {
        const res = await axios.get('/api/v2/products');
        dispatch({
          type: FETCH_SUCCESS,
          payload: res.data,
        });
      } catch (error) {
        console.log(error.message);
        dispatch({
          type: FETCH_FAIL,
          payload: error.message,
        });
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <title>E-shop</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading?
          (<div>Loading....</div>
          ): error? (
            <div>{error}</div>
          ):(
            <Row>
                {
                     products.map((product, i) => (
                      <Col sm={6} md={4} lg={3} className='mb-3' key={i}>
    
                    <Product product={product}/>
                    </Col>
                  ))
                
                }
                
            </Row>
            
            )
        
        }
      </div>
    </>
  );
}

export default HomeScreen;
