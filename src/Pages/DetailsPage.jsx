
import { useNavigate } from "react-router-dom";
import Detail from "../Components/Detail";
import Suggestion from "../Components/Suggestion";
import { useUserContext } from "../ContextAPI/userContext";
import { useEffect } from "react";


export default function DetailsPage(){

    const navigate = useNavigate();
    const { singleUser } = useUserContext();

    useEffect(() => {
        if(!singleUser){
            navigate();
        }
        else{
            console.log('yes');
        }
    },[])

    return(
        <>
            <Detail />
            <Suggestion />
        </>
    )
}