import data from './data/data';

function App() {
  return (
    <>
      <header>
        <a href="/">E-Shop</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product, i) => (
            <div className="product" key={i}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>

                <p><strong>${product.price}</strong></p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
