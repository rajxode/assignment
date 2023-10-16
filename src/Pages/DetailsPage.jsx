
// page to show info of a single CA

// hooks
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// context api hook
import { useUserContext } from "../ContextAPI/userContext";

// components
import Detail from "../Components/Detail";
import Suggestion from "../Components/Suggestion";


// render the page
export default function DetailsPage(){

    // to navigate 
    const navigate = useNavigate();
    // CA to show
    const { singleUser } = useUserContext();


    useEffect(() => {
        // if no user show redirect back
        if(!singleUser){
            navigate('/');
        }
    },[])

    return(
        <>  
            {/* render details of person */}
            <Detail />
            {/* suggested person */}
            <Suggestion />
        </>
    )
}