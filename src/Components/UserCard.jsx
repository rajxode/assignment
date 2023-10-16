import { useNavigate } from "react-router-dom";
import { useUserContext } from "../ContextAPI/userContext";


export default function UserCard(props){

    const { user } = props;
    const navigate = useNavigate();
    const { setSingleUser } = useUserContext();


    const handleClick = (e) =>{
        e.preventDefault();
        setSingleUser(user);
        navigate('/detail');
    }

    return (
        <div className="w-[370px] h-[400px] flex flex-col text-lg 
                    rounded-md shadow-md">
            <div className="w-full h-1/2 rounded-md">
                <img src={user.image} alt="image" className="w-full h-full rounded-md" />
            </div>
            <div className="w-full h-1/2 p-2 flex flex-col justify-between">
                <div className="h-3/5 flex flex-col text-base">
                    <div className="font-bold text-xl cursor-pointer"
                        onClick={handleClick}>
                        {user.name}
                        <span className="float-right">
                            {user.price}
                        </span>    
                    </div>
                    <div className="mt-1">{user.intro}</div>
                    <div className="mt-1">
                        <span className='text-sky-500 font-bold'>
                            <i class="fa-solid fa-star"></i> {user.rating}
                        </span> ( {user.reviewCount} )
                    </div>
                </div>
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