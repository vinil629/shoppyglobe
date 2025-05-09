import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link} from "react-router-dom";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { addItem } from "../utlis/cartSlice";

import Practise from "./Practise";


function ProductList(){
  console.log("gren")




 
  


    const [products,setProducts]=useState([])

   const [error,seterror]=useState(null)
   const [loading,setloading]=useState(true)

   
   const [text,setText]=useState('')

   const dispatch=useDispatch()
  


   


    useEffect(()=>{
      const fetchProducts = async () => {

        try{
          const res= await fetch('https://dummyjson.com/products')

          if(!res.ok) throw new Error('failed to fetch products')
          const data=await res.json()
          setProducts(data.products)


        }catch(error){
          console.log(error)
          seterror("unable to load products . please try again")
        }finally{
          setloading(false)
        }
      
          
         
       
      };

      fetchProducts()


    },[])


console.log("products",products)


const searcheditem =text ? products.filter(
  (res) => res.title.toLowerCase().includes(text.toLowerCase())
):products;


function handleAddBook(item){
  dispatch(addItem(item))
  alert('item is added to cart')
}

















    return(
        <>
        <div className="w-full min-h-screen bg-gray-100">
      
      {/* Error Message */}
      {error && (
        <p className="text-center text-xl sm:text-2xl text-red-600 transition-all duration-700 ease-out mt-5">
          {error}
        </p>
      )}

      {/* Heading */}
      <h1 className="capitalize font-bold text-xl sm:text-2xl md:text-3xl text-center p-4 md:p-6 mt-4">
        Products
      </h1 >

      {/* Loading Message */}
      {loading && (
        <p className="text-center text-xl sm:text-2xl text-red-600 transition-all duration-700 ease-out">
          Fetching your data...
        </p>
      )}

      {/* Search Input */}
      <div className="mt-6 px-4 sm:px-8">
        <input
          type="text"
          placeholder="Search here for products"
          className="w-full sm:w-96 p-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition text-xl bg-white "
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {searcheditem.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-transform duration-200"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-40 w-40 sm:h-48 sm:w-48 object-cover rounded-md mb-4"
            />
            <h1 className="text-lg font-semibold mb-1">{item.title}</h1>
            <p className="text-yellow-500 font-medium mb-1">⭐ {item.rating}</p>
            <p className="text-green-600 font-bold text-md">$ {item.price}</p>
            <div className="flex gap-2 mt-4 flex-wrap justify-center">
              <Link to={`/productdetails/${item.id}`}>
                <button className="bg-orange-400 px-4 py-2 text-white rounded-md hover:bg-orange-500 transition cursor-pointer hover:underline">
                  View
                </button>
              </Link>

              <button
                className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600 transition hover:underline cursor-pointer"
                onClick={() => handleAddBook(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
       
            
               
                </>

            
         
       
    
        
    )
}


export default ProductList;