
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlus ,faMagnifyingGlassPlus,faHouse,faCartPlus,faSatellite,faTruck,faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header(){
    const cartitems=useSelector((store)=>store.cart.items)

    console.log("cartitems",cartitems)
    return(
        <>
        <div className= " flex flex-col p-8 md:flex-row justify-between items-center   py-4 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 shadow-md sticky top-0 z-50">
  {/* Logo */}
 <h1 className="text-2xl md:text-4xl text-white font-bold mb-4 md:mb-0 flex items-center gap-2">
  <FontAwesomeIcon icon={faSatellite} />
  <span className="text-white  bg-clip-text">
    shoporbit
  </span>
</h1> 

     


  {/* Nav Links */}
  <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-white text-lg capitalize">
    <Link to="/">
      <li className="hover:text-yellow-300 transition duration-100 cursor-pointer">
        <FontAwesomeIcon icon={faHouse} /> Home
      </li>
    </Link>

    <Link to="/search">
      <li className="hover:text-yellow-300 transition duration-100 cursor-pointer">
        <FontAwesomeIcon icon={faMagnifyingGlassPlus} /> Search
      </li>
    </Link>

    <Link to="/productdetails">
      <li className="hover:text-yellow-300 transition duration-100 cursor-pointer">
        <FontAwesomeIcon icon={faTruck} /> Products
      </li>
    </Link>

    <Link to="/Cart">
      <li className="hover:text-yellow-300 transition duration-100 cursor-pointer">
        <FontAwesomeIcon icon={faCartPlus} /> Cart ({cartitems.length})
      </li>
    </Link>

    <Link to="/Cartitem">
      <li className="hover:text-yellow-300 transition duration-100 cursor-pointer">
        <FontAwesomeIcon icon={faBagShopping} /> Checkout
      </li>
    </Link>
  </ul>

</div>

     
        
        </>
    )
}


export default Header