import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ShimmerCard from "./Cardshimmerui";
// Link to your CSS file

function ProductItem() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setItems(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const selectedItems = items.filter((item) => item.id === parseInt(id));

  return (
    <>
      <h1 className="product-heading">Product Details</h1>

      <div className="product-container">
        {selectedItems.length === 0 && (
          <div>
            <p className="loading-text">Loading...</p>
            <ShimmerCard />
          </div>
        )}

        {selectedItems.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image-container">
              <img
                src={item.images[0]}
                alt={item.title}
                className="product-image"
              />
            </div>

            <div className="product-info">
              <h2 className="product-title">{item.title}</h2>

              <div className="product-details">
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Brand:</strong> {item.brand}</p>
                <p><strong>Rating:</strong> ⭐ {item.rating}</p>
                <p className="product-price">${item.price}</p>
              </div>

              <p className="product-description">{item.description}</p>

              <div className="back-button-container">
                <Link to="/">
                  <button className="back-button">Back to Store</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductItem;
