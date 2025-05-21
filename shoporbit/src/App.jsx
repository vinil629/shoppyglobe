import Header from './Components/Header'
import ProductList from './Components/ProductList'
import ProductItem from './Components/ProductItem'
import './App.css'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utlis/appStore'
import './index.css'; // ✅ Correct path to your Tailwind CSS file




function App() {
  const location=useLocation()
  const isHome=location.pathname==='/';
  

  return (

    <>
    <Provider store={appStore}>

    <Header/>
    {isHome&&<ProductList/>}
    <Outlet/>

    </Provider>


   
   

    

  
    
      
    </>
  )
}

export default App
