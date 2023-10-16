import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

    const [showMenu,setShowMenu] = useState(false);

    return(
        <>
            <div className="w-full min-h-[55px] px-2 lg:px-[7%] flex shrink-0 justify-between items-center shadow-md">
                <div className="flex justify-between w-full md:w-4/5 lg:w-3/5">

                    <div className="w-[125px] lg:w-[15%] flex justify-between items-center">
                        <div className=" md:hidden font-bold text-xl flex justify-center items-center mr-2 hover:p-1 hover:rounded-md 
                                hover:border hover:bg-slate-100 cursor-pointer"
                            onClick={() => setShowMenu(!showMenu)}>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <Link to='/'>
                            <img src="/logo.png" alt="logo" className="w-[90%] md:w-full h-[35px]" />
                        </Link>
                    </div>
                    
                    <div className="hidden items-center w-4/5 md:block">
                        <ul className="font-bold">
                            <li className="inline-block mx-3">
                                <select id="solution">
                                    <option>
                                        Solutions                                        
                                    </option>
                                </select>
                            </li>
                            
                            <li className="inline-block mx-3">
                                <select id="solution">
                                    <option>
                                        Features                                        
                                    </option>
                                </select>
                            </li>
                            
                            <li className="inline-block mx-3">Blogs</li>
                            
                            <li className="inline-block mx-3">
                                <select id="solution">
                                    <option>
                                        About                                        
                                    </option>
                                </select>
                            </li>
                        </ul>
                    </div>  
                </div>

                <div className="flex justify-between w-auto"> 
                    <button className="border px-2 py-[2px] rounded border-blue-400 text-blue-400 
                                font-semibold mx-2">
                        Login
                    </button>
                    <button className="px-2 py-[2px] rounded bg-blue-400 text-white font-semibold mx-2">
                        Register
                    </button>
                </div>
            </div>
            <div className="w-full bg-white shadow-lg">
                {
                    showMenu &&
                    <div className="items-center w-full">
                        <ul className="font-bold w-full px-3">
                            <li className="w-full h-[40px] border-b flex items-center">
                                <select id="solution">
                                    <option>
                                        Solutions                                        
                                    </option>
                                </select>
                            </li>
                            
                            <li className="w-full h-[40px] border-b flex items-center">
                                <select id="solution">
                                    <option>
                                        Features                                        
                                    </option>
                                </select>
                            </li>
                            
                            <li className="w-full h-[40px] pl-1 border-b flex items-center">
                                Blogs
                            </li>
                            
                            <li className="w-full h-[40px] border-b flex items-center">
                                <select id="solution">
                                    <option>
                                        About                                        
                                    </option>
                                </select>
                            </li>
                        </ul>
                    </div>  
                }
            </div>
        </>
    )
}