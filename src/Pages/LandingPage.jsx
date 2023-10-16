
import { Outlet } from "react-router-dom";

// components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// landing page
export default function LandingPage(){

    return(
        <>  
            {/* navbar of page */}
            <Navbar />
            {/* dynamic content on page */}
            <Outlet />
            {/* footer of page */}
            <Footer />
        </>
    )
}