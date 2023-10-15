import { Link } from "react-router-dom";

export default function Navbar(){

    return(
            <div className="h-[55px] px-[7%] flex shrink-0 justify-between items-center">
                <div className="flex justify-between w-3/5">
                    <div className="w-[15%]">
                        <Link to='/'>
                            <img src="/logo.png" alt="logo" className="w-full h-[35px]" />
                        </Link>
                    </div>
                    
                    <div className="flex items-center w-4/5">
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

                <div className="flex justify-between w-[10%]"> 
                    <button className="border px-2 py-[2px] rounded border-blue-400 text-blue-400 font-semibold">
                        Login
                    </button>
                    <button className="px-2 py-[2px] rounded bg-blue-400 text-white font-semibold">
                        Register
                    </button>
                </div>
            </div>

    )
}