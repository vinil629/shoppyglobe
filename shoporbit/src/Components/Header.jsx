
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlassPlus, faTruck, faCartPlus, faSatellite, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartitems = useSelector((store) => store.cart.items);

  console.log("cartitems", cartitems);
  return (
    <>
      <div className="header-container">
        {/* Logo */}
        <h1 className="header-logo">
          <FontAwesomeIcon icon={faSatellite} />
          <span className="header-logo-text">shoporbit</span>
        </h1>

        {/* Nav Links */}
        <ul className="nav-links">
          <Link to="/">
            <li className="nav-item">
              <FontAwesomeIcon icon={faHouse} /> Home
            </li>
          </Link>

          <Link to="/search">
            <li className="nav-item">
              <FontAwesomeIcon icon={faMagnifyingGlassPlus} /> Search
            </li>
          </Link>

          <Link to="/productdetails">
            <li className="nav-item">
              <FontAwesomeIcon icon={faTruck} /> Products
            </li>
          </Link>

          <Link to="/Cart">
            <li className="nav-item">
              <FontAwesomeIcon icon={faCartPlus} /> Cart ({cartitems.length})
            </li>
          </Link>

          <Link to="/Cartitem">
            <li className="nav-item">
              <FontAwesomeIcon icon={faBagShopping} /> Checkout
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
