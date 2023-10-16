import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('api/v2/products');
      setProducts(res.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product, i) => (
          <div className="product" key={i}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>

              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeScreen;
