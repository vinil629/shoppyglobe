import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addItem } from "../utlis/cartSlice"
import { useState } from "react"
function Cartitem(){

   
   


    const cartItems=useSelector((state)=>state.cart.items)

    console.log("cartitems in cartitem",cartItems)

    
    return(


        <>
       <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen">

{/* Page Heading */}
<h1 className="text-center text-2xl sm:text-3xl font-semibold mb-6">Checkout</h1>

{/* Cart Items Section */}
<div className="border border-gray-300 rounded-lg bg-white shadow p-5 sm:p-6 md:p-8 max-w-3xl mx-auto">
  <h2 className="text-center text-xl sm:text-2xl font-medium mb-4">Cart Items:</h2>

  {cartItems.length > 0 ? (
    cartItems.map((item, index) => (
      <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200">
        <p className="text-lg sm:text-xl font-bold">{item.title}</p>
        <p className="text-md sm:text-lg font-semibold text-green-700">${item.price}</p>
      </div>
    ))
  ) : (
    <p className="text-center text-lg text-gray-500">Checkout is empty</p>
  )}
</div>
</div>

       
        

        


        
        </>

    )
}

export default Cartitem