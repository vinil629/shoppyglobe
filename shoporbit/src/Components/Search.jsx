import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import ShimmerCard from "./Cardshimmerui"

function Search(){

    const [text,setText]=useState('')
    const [item,setItem]=useState([])
   
    
  

     useEffect(()=>{

          const fetchProducts = async () => {
            try {
              const res = await fetch('https://dummyjson.com/products');
              const data = await res.json();
              setItem(data.products); // API returns an array directly
            } catch (error) {
              console.error("Error fetching products:", error);
            }
          };
    
          fetchProducts()
    
    
        },[])

        console.log("item",item)


       
      

        const searcheditem =text ? item.filter(
          (res) => res.title.toLowerCase().includes(text.toLowerCase())
        ):[];
        
        console.log("searcheditem", searcheditem);
        

       
     



    console.log("text",text)
    return(
        <>
        
        <div className="mt-10 px-4 sm:px-6 md:px-10">
  {/* Search Bar */}
  <div className="mb-6 text-center">
    <p className="text-2xl font-semibold mb-3">Search for Products</p>
    <input
      type="text"
      placeholder="Search here..."
      className="w-full max-w-xl border border-gray-300 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-2xl"
      onChange={(e) => setText(e.target.value)}
    
    />
  </div>

  {/* Products Grid */}
  <div className="flex flex-wrap justify-center gap-8 p-4">

  
    

    {searcheditem.length===0 && <div><p>product not found... </p> </div>}
    {searcheditem.map((item) => (
      <div
        key={item.id}
        className="w-full max-w-xs bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl cursor-pointer transition-transform duration-200"
      >
        <img
          src={item.images}
          alt={item.title}
          className="h-48 w-48 object-cover rounded-md mb-4"
        />
        <h1 className="text-lg font-semibold mb-1">{item.title}</h1>
        <p className="text-yellow-500 font-medium mb-1">⭐ {item.rating}</p>
        <p className="text-green-600 font-bold text-md">${item.price}</p>
        <div className="flex gap-2 mt-4">
          <Link to={`/productdetails/${item.id}`}>
            <button className="bg-orange-400 px-4 py-2 text-white rounded-md hover:bg-orange-500 transition">
              View
            </button>
          </Link>
          <button
            onClick={() => handleAddBook(item)}
            className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

       
        </>
    )
}

export default Search