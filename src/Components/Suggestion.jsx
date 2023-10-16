
// hooks
import { useEffect, useState } from "react";

// context api
import { useUserContext } from "../ContextAPI/userContext";

// single CA card
import UserCard from "./UserCard";


export default function Suggestion(){

    // list of CA's
    const {userList} = useUserContext();
    const [ suggestionArray , setSuggestionArray ] = useState([]);

    useEffect(() => {
        // get random CA
        const i = Math.floor(Math.random() * 7);
        const suggestedCA = userList.splice(i,3);
        // set suggestion
        setSuggestionArray(suggestedCA);
    },[]);

    return(
        <div className="px-[7%] mt-[5%]">

            {/* heading */}
            <div className="w-full font-bold text-3xl">
                Recommended for you
            </div>

            {/* show card of CA */}
            <div className="w-full flex justify-between flex-wrap p-[2%]">
                {
                    suggestionArray.map((user,i) => <UserCard key={i} user={user} />)
                }
            </div>
        </div>
    )
}