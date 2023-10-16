
// hooks
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../ContextAPI/userContext";

// render the card of a single CA
export default function UserCard(props){

    // data from props
    const { user } = props;
    // to navigate
    const navigate = useNavigate();
    // set data of a single CA when click on name or button
    const { setSingleUser } = useUserContext();


    // handle click event on button and name
    const handleClick = (e) =>{
        e.preventDefault();
        // set CA's data
        setSingleUser(user);
        // redirect to detail page
        navigate('/detail');
    }

    return (
        <div className="w-[370px] h-[400px] flex flex-col text-lg 
                    rounded-md shadow-md">
            
            {/* image of user */}
            <div className="w-full h-1/2 rounded-md bg-cover" style={{backgroundImage:'url(./detail.png)'}}>
                <img src={user.image} alt="image" className="w-full h-full rounded-md" />
            </div>

            {/* info card */}
            <div className="w-full h-1/2 p-2 flex flex-col justify-between">
                <div className="h-3/5 flex flex-col text-base">
                    
                    {/* name and price of CA */}
                    <div className="font-bold text-xl cursor-pointer"
                        onClick={handleClick}>
                        {user.name}
                        <span className="float-right">
                            {user.price}
                        </span>    
                    </div>

                    {/* intro text */}
                    <div className="mt-1">{user.intro}</div>
                    
                    {/* ratings of CA */}
                    <div className="mt-1">
                        <span className='text-sky-500 font-bold'>
                            <i class="fa-solid fa-star"></i> {user.rating}
                        </span> ( {user.reviewCount} )
                    </div>
                </div>
                {/* button to see detail */}
                <div className="h-fit">
                    <button className="w-full bg-sky-600 text-white font-semibold
                                py-1 rounded-md text-lg shadow"
                            onClick={handleClick}                           
                        >
                        View Services
                    </button>
                </div>
            </div>
        </div>
    )
}