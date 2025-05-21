import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Search.css";

function Search() {
  const [text, setText] = useState('');
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setItem(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const searcheditem = text
    ? item.filter((res) =>
        res.title.toLowerCase().includes(text.toLowerCase())
      )
    : [];

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <p className="search-title">Search for Products</p>
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {searcheditem.length === 0 && (
          <p className="no-results">Product not found...</p>
        )}

        {searcheditem.map((item) => (
          <div key={item.id} className="product-card">
            <img
              src={item.images}
              alt={item.title}
              className="product-image"
            />
            <h1 className="product-title">{item.title}</h1>
            <p className="product-rating">⭐ {item.rating}</p>
            <p className="product-price">${item.price}</p>
            <div className="product-buttons">
              <Link to={`/productdetails/${item.id}`}>
                <button className="btn view-btn">View</button>
              </Link>
              <button
                onClick={() => handleAddBook(item)}
                className="btn add-btn"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
