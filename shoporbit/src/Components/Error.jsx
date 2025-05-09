

import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"

function Error(){

    const err=useRouteError()
    console.log("error",err)
    return(
        <>
        <div className="flex justify-center min-h-screen">

            <div className="mt-10">


        <h1>error 404 found</h1>
        <h2>{err.status}</h2>
        <h3>{err.statusText}</h3>
        <p className="text-xl mt-4">Oops! Page not found.</p>

        <Link to="/">
        <button className="bg-orange-400 p-2 rounded text-xl mt-2 ">back to home</button>
        </Link>
       
        </div>

        

        </div>
        

        </>
    )
}

export default Error