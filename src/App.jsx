
// router 
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// context api
import { UserContext } from "./ContextAPI/userContext"

// pages to render 
import LandingPage from "./Pages/LandingPage"
import DetailsPage from "./Pages/DetailsPage"
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";



function App() {

  // routes
  const router = createBrowserRouter([
    {
      path:'/',
      element:<LandingPage />,
      errorElement:<ErrorPage />,
      children:[
        { index:true , element:<HomePage /> },
        { path:'/detail' , element:<DetailsPage /> },
      ]
    }
  ])


  return (
    // context api
    <UserContext>
      {/* router provider */}
      <RouterProvider router={router} />
    </UserContext>
  )
}

export default App
