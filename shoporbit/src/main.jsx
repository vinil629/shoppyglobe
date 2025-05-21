import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { lazy,Suspense } from 'react'
import './index.css';


import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'


import Error from './Components/Error.jsx'
import ShimmerCard from './Components/Shimmerui.jsx'





const Search=lazy(()=>import ('./Components/Search.jsx'))
const Productdetails=lazy(()=>import('./Components/Productdetails.jsx'));
const ProductItem=lazy(()=>import( './Components/ProductItem.jsx'))
const App=lazy(()=>import('./App.jsx'))
const Cart=lazy(()=>import ('./Cart.jsx'))
const Cartitem=lazy(()=>import ('./Components/Cartitem.jsx'))

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (<Suspense fallback={<ShimmerCard/>}><App /></Suspense>),
      errorElement:<Error/>,

      children:[
        {
          path: "productdetails/:id", // fixed typo here
          element: (
            <Suspense fallback={<div>loading</div>}><ProductItem /></Suspense>
          
          ),
        },
        {
          path:"search",
          element:(
            <Suspense fallback={<div>loading...</div>}><Search/></Suspense>
          ),
        },
        {
          path:"/productdetails",
          element:(<Suspense fallback={<div>loading</div>}><Productdetails/></Suspense>),
        },
        {
          path:"Cartitem",
          element:(<Suspense fallback={<div className='text-centre text-2xl'>loading</div>}><Cartitem/></Suspense>),
        },
        {
          path:"Cart",
          element:(<Suspense fallback={<div className='text-centre text-2xl'>loading</div>}><Cart/></Suspense>)
        }
       

      ]
      
       
      

    },
   
   
  ]);
  
  createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
  );