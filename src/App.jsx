import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { UserContext } from "./ContextAPI/userContext"
import LandingPage from "./Pages/LandingPage"
import DetailsPage from "./Pages/DetailsPage"
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";

function App() {

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
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  )
}

export default App
