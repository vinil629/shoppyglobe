import { useLocation ,Navigate} from "react-router-dom";

function Practise({product}){


    const location=useLocation()

    const {products}=location.state || {};

  
   if (!product) {
    return <Navigate to="/" />;;
  }


   


    return(
        <>

<div>
      <h2>Product Details</h2>
      <p>ID: {products.id}</p>
      <p>Title: {products.title}</p>
      <p>Price: ${products.price}</p>
    </div>
        
     
        </>
    )
}

export default Practise