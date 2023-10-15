import { RouterProvider, createBrowserRouter } from "react-router-dom"

import LandingPage from "./Pages/LandingPage"
import DetailsPage from "./Pages/DetailsPage"
import Navbar from "./Components/Navbar"

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Navbar />,
      errorElement:<Error />,
      children:[
        { index:true , element:<LandingPage /> },
        { path:'/detail' , element:<DetailsPage /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
