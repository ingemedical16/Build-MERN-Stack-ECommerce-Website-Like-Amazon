//import React from 'react';

import { Link } from 'react-router-dom';
import data from '../data/data';

function HomeScreen() {
  return (
    <>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product, i) => (
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
