import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utlis/cartSlice";
import FullScreenShimmer from "./Shimmerui";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const searcheditem = text
    ? products.filter(res => res.title.toLowerCase().includes(text.toLowerCase()))
    : products;

  function handleAddBook(item) {
    dispatch(addItem(item));
    alert('Item is added to cart');
  }

  return (
    <div className="productlist-container">
      
      {error && (
        <p className="error-message">
          {error}
          <FullScreenShimmer />
        </p>
      )}

      {loading && (
        <div>
          <p className="loading-message">Fetching your data...</p>
          <FullScreenShimmer />
        </div>
      )}

      {/* Only show this section after loading is complete */}
      {!loading && (
        <>
          <h1 className="products-heading">Products</h1>
          <h2 className="subheading">From every corner of the globe to your cart – discover it at Shoporbit</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search here for products"
              className="search-input"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </div>
        </>
      )}

      {!loading && (
        <div className="products-grid">
          {searcheditem.map(item => (
            <div key={item.id} className="product-card">
              <img src={item.images[0]} alt={item.title} className="product-image" />
              <h1 className="product-title">{item.title}</h1>
              <p className="product-rating">⭐ {item.rating}</p>
              <p className="product-price">$ {item.price}</p>
              <div className="product-buttons">
                <Link to={`/productdetails/${item.id}`}>
                  <button className="btn-view">View</button>
                </Link>
                <button
                  className="btn-add"
                  onClick={() => handleAddBook(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
