import { useEffect, useState } from "react";
import { useUserContext } from "../ContextAPI/userContext";
import UserCard from "./UserCard";


export default function Suggestion(){

    const {userList} = useUserContext();
    const [ suggestionArray , setSuggestionArray ] = useState([]);

    useEffect(() => {
        const i = Math.floor(Math.random() * 7);
        setSuggestionArray(userList.splice(i,3));
    },[]);

    return(
        <div className="px-[7%] mt-[5%]">
            <div className="w-full font-bold text-3xl">
                Recommended for you
            </div>

            <div className="w-full flex justify-between flex-wrap p-[2%]">
                {
                    suggestionArray.map((user,i) => <UserCard key={i} user={user} />)
                }
            </div>
        </div>
    )
}