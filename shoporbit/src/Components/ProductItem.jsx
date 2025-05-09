import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function ProductItem(){

    const [items,setitems]=useState([])


    const {id}=useParams()

    console.log(id);

    useEffect(()=>{
      const fetchProducts = async () => {

        try{
          const res= await fetch('https://dummyjson.com/products')

          
          const data=await res.json()
          setitems(data.products)


        }catch(error){
          console.log(error)
        }
      
          
         
       
      };

      fetchProducts()


    },[])

    console.log("items",items)

    const selecteditems=items.filter((item)=>item.id===parseInt(id))
    console.log("selecteditems",selecteditems)





   
    
  

  
    return(
        <>
        
        
      <h1 className="text-3xl font-serif text-gray-800 mt-4 text-center">Product Details</h1>

<div className="px-4 md:px-20 py-5">

  {selecteditems.length === 0 && <p className="text-center">Loading...</p>}

  <div className="w-full min-h-screen ">
    {selecteditems.map((item) => (
      <div key={item.id} className="flex flex-col md:flex-row shadow-lg rounded-2xl p-6 m-4 ">
        
        {/* Image Section */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={item.images[0]}
            alt={item.title}
            className="h-60 w-60 object-cover rounded-xl border border-gray-300"
          />
        </div>

        {/* Text Section */}
        <div className="mt-6 md:mt-0 md:ml-10 flex flex-col justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{item.title}</h1>

          <div className="space-y-1 text-gray-700">
            <p><span className="font-semibold">Category:</span> {item.category}</p>
            <p><span className="font-semibold">Brand:</span> {item.brand}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {item.rating}</p>
            <p className="text-xl font-bold text-green-700">${item.price}</p>
          </div>

          <p className="mt-4 text-gray-600 font-serif">{item.description}</p>

          <div className="mt-3">
            <Link to="/">
              <button className="bg-red-400 text-white p-2 rounded-xl capitalize cursor-pointer hover:bg-red-500 transition">
                Back to Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        
        
        </>
    )
}

export default ProductItem