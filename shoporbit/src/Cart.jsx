import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem, clearCart } from "./utlis/cartSlice";
import "./Cart.css"; // Make sure to create this file

function Cart() {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function handleremoveitem(item) {
    dispatch(removeItem(item));
  }

  function handleAddBook(item) {
    dispatch(addItem(item));
  }

  function handleclear() {
    dispatch(clearCart());
  }

  return (
    <div className="cart-container">
      {/* Header */}
      <div className="cart-header">
        <h1 className="cart-title">Cart</h1>
        <button className="clear-cart-btn" onClick={handleclear}>
          Clear Cart
        </button>
      </div>

      {/* Empty cart */}
      {cartitems.length === 0 && (
        <p className="empty-message">Cart is empty</p>
      )}

      {/* Cart items */}
      <div className="cart-items">
        {cartitems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.images} alt={item.title} />
            </div>
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              <p className="item-text">{item.category}</p>
              <p className="item-text">{item.brand}</p>
              <p className="item-text">⭐ {item.rating}</p>
              <p className="item-price">${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleremoveitem(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddBook(item)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
