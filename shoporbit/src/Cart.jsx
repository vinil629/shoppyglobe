import { useSelector } from "react-redux"
import { removeItem } from "./utlis/cartSlice"
import { useDispatch } from "react-redux"
import { addItem } from "./utlis/cartSlice"
import { clearCart } from "./utlis/cartSlice"
import Cartitem from "./Components/Cartitem"

function Cart(){

    const cartitems=useSelector((store)=>store.cart.items)

    console.log("cartitems in cart",cartitems)

    const dispatch=useDispatch()

    function handleremoveitem(item){
        dispatch(removeItem(item))
    }

    function handleAddBook(item){
       
        dispatch(addItem(item))

        
      }
      function handleclear(){

        dispatch(clearCart())

      }


  

    
    return(
        <>

<div className="mt-4 text-center px-4 sm:px-6 md:px-10">

{/* Header */}
<div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 gap-4">
  <h1 className="capitalize text-xl sm:text-2xl font-bold">Cart</h1>
  <button
    className="border border-black bg-amber-700 text-white rounded px-4 py-2 hover:underline transition"
    onClick={() => handleclear()}
  >
    Clear Cart
  </button>
</div>

{/* Empty cart message */}
{cartitems.length === 0 && (
  <p className="text-lg sm:text-2xl font-medium">Cart is empty</p>
)}

{/* Cart items */}
<div className="flex flex-col items-center gap-6">
  {cartitems.map((item) => (
    <div
      key={item.id}
      className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-between p-4 bg-gray-100 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
    >
      {/* Product image */}
      <div className="mb-4 md:mb-0">
        <img src={item.images} alt={item.title} className="h-40 w-40 object-cover rounded-md" />
      </div>

      {/* Product details */}
      <div className="text-gray-700 text-left md:ml-6 flex-1 space-y-1">
        <p className="text-lg sm:text-xl font-semibold">{item.title}</p>
        <p className="text-sm sm:text-base">{item.category}</p>
        <p className="text-sm sm:text-base">{item.brand}</p>
        <p className="text-sm sm:text-base">⭐ {item.rating}</p>
        <p className="text-lg font-bold text-green-700">${item.price}</p>

        {/* Quantity Controls */}
        <div className="mt-3 flex items-center gap-4 text-xl">
          <button
            onClick={() => handleremoveitem(item)}
            className="bg-red-400 px-3 py-1 rounded text-white hover:bg-red-500"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => handleAddBook(item)}
            className="bg-orange-400 px-3 py-1 rounded text-white hover:bg-orange-500"
          >
            +
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
</div>

       

                </>
    )
}

export default Cart