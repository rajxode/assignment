
// render the homepage


// components required
import Features from "../Components/Features"
import Header from "../Components/Header"
import Join from "../Components/Join"

// render page
export default function HomePage(){

    return(
        <>  
            {/* header section */}
            <Header />
            {/* section of joining steps */}
            <Join />
            {/* section of features */}
            <Features />
        </> 
    )
}