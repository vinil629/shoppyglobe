import { useSelector } from "react-redux";
import "./Cartitem.css"; // Make sure this file exists

function Cartitem() {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartitems in cartitem", cartItems);

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-card">
        <h2 className="cart-items-heading">Cart Items:</h2>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item-row">
              <p className="item-name">{item.title}</p>
              <p className="item-price">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="empty-message">Checkout is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cartitem;
