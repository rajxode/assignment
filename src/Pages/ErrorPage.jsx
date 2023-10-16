
// hooks
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../ContextAPI/userContext";

// render the page
export default function ErrorPage(){

    // error message
    const { error } = useUserContext();
    // to navigate to homepage
    const navigate = useNavigate();

    // redirect to homepage
    useEffect(() => {   
        setTimeout(() => {
            navigate('/')
        },2000);
    },[])

    // render the page
    // show message
    return(
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold">
                Oops, something went wrong !!!!!!
                <p>
                    {error}
                </p>
            </h1>
            <div>
                please wait , redirecting back to homepage !!!
            </div>
        </div>
    )
}