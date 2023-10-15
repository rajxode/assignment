import UserCard from "./UserCard";


export default function Suggestion(){
    return(
        <div className="px-[7%] mt-[5%]">
            <div className="w-full font-bold text-3xl">
                Recommended for you
            </div>

            <div className="w-full flex justify-between flex-wrap p-[2%]">
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
        </div>
    )
}