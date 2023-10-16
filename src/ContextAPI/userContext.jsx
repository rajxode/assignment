

// hooks
import { useState ,createContext, useContext, useEffect } from "react";

// axios instance for fetching data
import axiosInstance from "../utils/axios";

// create context api
export const userContext = createContext();

// custom hook to get data
export const useUserContext = () => {
    const value = useContext(userContext);
    return value;
}

// context api
export const UserContext = ({children}) => {
    
    // state variables
    // list of all the user
    const [userList,setUserList] = useState([]);
    // for showing detail of a CA
    const [singleUser,setSingleUser] = useState();
    // error message
    const [error,setError] = useState();


    // get list of all the CA
    useEffect(() => {
        async function getUser(){
            try{
                // fetch data
                const response = await axiosInstance.get('/api/get-data');
                // store data
                setUserList(response.data);
            }catch(error){
                // error message
                setError(error.message);
            }   
        }
        getUser();
    },[])


    return(
        <>
            {/* context api */}
            <userContext.Provider value={
                {
                    userList,
                    singleUser,
                    setSingleUser,
                    error
                }
            }>  
                {/* app */}
                {children}
            </userContext.Provider>
        </>
    )
}