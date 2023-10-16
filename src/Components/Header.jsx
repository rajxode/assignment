
// header section of homepage

// hook
import { useState } from "react";

// context api
import { useUserContext } from "../ContextAPI/userContext"

// render the single CA card
import UserCard from "./UserCard";


export default function Header(){

    // list of all the CA
    const {userList} = useUserContext();
    // searchBar text
    const [search,setSearch] = useState('');

    return(
        <div className="w-full flex flex-col">
            <div className="w-full flex flex-col lg:flex-row px-[7%] py-[20px] justify-between bg-slate-100" 
                style={{backgroundImage: "linear-gradient(138deg, rgb(255 255 255) 0%, rgb(213 241 253) 100%)"}} >
                
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-around">
                    
                    {/* section heading */}
                    <div className="w-full h-fit mt-[4%] flex flex-col ">
                        <div className="text-6xl font-bold mb-[1%]">
                            Find
                            <span style={{background: "linear-gradient(90.97deg, #0076CE 26.63%, #9400D3 65.81%)" , WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}> Partners </span>
                            (CAs) available online
                        </div>
                        <div className="text-slate-400 mt-[2%]">
                            <b>CONNECT </b>
                            with us where your services arel isted and visible to a myriad of businesses seeking CA's for compliance support
                        </div>
                    </div>
                    

                    {/* input bar to serach CA */}
                    <div className="w-full h-1/5">
                        <input 
                            type="text" 
                            placeholder="Search by name"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border py-1 px-2 rounded rounded-r-none w-[80%] xl:w-3/5 h-[50px]" />
                            
                        <button className="py-1 px-2 rounded rounded-l-none bg-sky-600 text-white w-1/5 h-[49px]">
                            Search
                        </button>
                    </div>

                    
                    
                </div>
                
                {/* image on header */}
                <div className="w-full lg:w-[45%] mt-[2%] lg:mt-0 h-full flex flex-wrap justify-between">
                    <div className="w-[32%] h-full">
                        <img src='/head-1.png' alt="image" className="w-full" />
                    </div>
                    <div className="w-[32%] h-full">
                        <img src='/head-2.png' alt="image" className="w-full" />
                    </div>
                    <div className="w-[32%] h-full">
                        <img src='/head-3.png' alt="image" className="w-full" />
                    </div>
                </div>
            </div>


            {/* list of searched CA */}
            <div className="w-full px-[7%] py-[20px] flex flex-wrap justify-between bg-slate-100">
                {
                    userList
                    .filter((user) => {
                        return search.toLocaleLowerCase() === ''
                        ? null
                        :user.name.toLocaleLowerCase().includes(search)} )
                    .map((user,i) =>  <UserCard key={i} user={user} />) 
                }
            </div>
        </div>
    )
}



