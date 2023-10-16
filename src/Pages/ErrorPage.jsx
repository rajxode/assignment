import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function ErrorPage(){

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        },2000);
    },[])

    return(
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold">
                Oops, something went wrong !!!!!!
            </h1>
            <div>
                please wait , redirecting back to homepage !!!
            </div>
        </div>
    )
}