
// show the navbar at top of screen 

// hooks
import { useState } from "react";
import { Link } from "react-router-dom";


// render the navbar
export default function Navbar(){

    // for showing menu on smaller screen 
    const [showMenu,setShowMenu] = useState(false);

    return(
        <>
            <div className="w-full min-h-[55px] px-2 lg:px-[7%] flex shrink-0 justify-between items-center shadow-md">
                <div className="flex justify-between w-full md:w-4/5 lg:w-3/5">

                    <div className="w-[125px] lg:w-[15%] flex justify-between items-center">
                        
                        {/* menu icon on small screen , hidden on screen above medium */}
                        <div className=" md:hidden font-bold text-xl flex justify-center items-center mr-2 hover:p-1 hover:rounded-md 
                                hover:border hover:bg-slate-100 cursor-pointer"
                            onClick={() => setShowMenu(!showMenu)}>
                            <i class="fa-solid fa-bars"></i>
                        </div>

                        {/* brand image with link to homepage */}
                        <Link to='/'>
                            <img src="/logo.png" alt="logo" className="w-[90%] md:w-full h-[35px]" />
                        </Link>

                    </div>
                    
                    {/* list of navbar , hidden on screen below medium */}
                    <div className="hidden items-center w-4/5 md:block">
                        {/* list */}
                        <ul className="font-bold">
                            {/* list item */}
                            {/* solutions */}
                            <li className="inline-block mx-3">
                                <select id="solution">
                                    <option>
                                        Solutions                                        
                                    </option>
                                </select>
                            </li>
                            
                            {/* features */}
                            <li className="inline-block mx-3">
                                <select id="solution">
                                    <option>
                                        Features                                        
                                    </option>
                                </select>
                            </li>
                            
                            {/* blogs */}
                            <li className="inline-block mx-3">Blogs</li>
                            
                            {/* about */}
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

                {/* buttons for login and register */}
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

            {/* show menu on smaller screen when menu icon is clicked */}
            <div className="w-full md:hidden bg-white shadow-lg">
                {
                    // if icon is clicked to show item
                    showMenu &&
                    // render the menu items
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