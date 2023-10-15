import { RouterProvider, createBrowserRouter } from "react-router-dom"

import LandingPage from "./Pages/LandingPage"
import DetailsPage from "./Pages/DetailsPage"
import HomePage from "./Pages/HomePage"

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<LandingPage />,
      errorElement:<Error />,
      children:[
        { index:true , element:<HomePage /> },
        { path:'/detail' , element:<DetailsPage /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
