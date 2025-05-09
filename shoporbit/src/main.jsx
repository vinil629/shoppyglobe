import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import ProductItem from './Components/ProductItem.jsx'
import Search from './Components/Search.jsx'
import Error from './Components/Error.jsx'
import Productdetails from './Components/Productdetails.jsx'
import Cartitem from './Components/Cartitem.jsx'
import Cart from './Cart.jsx'


const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement:<Error/>,

      children:[
        {
          path: "productdetails/:id", // fixed typo here
          element: <ProductItem />
        },
        {
          path:"search",
          element:<Search/>
        },
        {
          path:"/productdetails",
          element:<Productdetails/>
        },
        {
          path:"Cartitem",
          element:<Cartitem/>
        },
        {
          path:"Cart",
          element:<Cart/>
        }
       

      ]
      
       
      

    },
   
   
  ]);
  
  createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
  );