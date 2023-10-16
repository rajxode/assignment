
import { useState ,createContext, useContext, useEffect } from "react";
import axiosInstance from "../utils/axios";


export const userContext = createContext();


export const useUserContext = () => {
    const value = useContext(userContext);
    return value;
}


export const UserContext = ({children}) => {
    const [userList,setUserList] = useState([]);
    const [singleUser,setSingleUser] = useState();
    const [error,setError] = useState();

    useEffect(() => {
        async function getUser(){
            try{
                const response = await axiosInstance.get('/api/get-data');
                setUserList(response.data);
            }catch(error){
                setError(error.message);
            }   
        }
        getUser();
    },[])



    return(
        <>
            <userContext.Provider value={
                {
                    userList,
                    singleUser,
                    setSingleUser,
                    error
                }
            }>
                {children}
            </userContext.Provider>
        </>
    )
}