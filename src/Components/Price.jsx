
// render the price section of details page

export default function Price(props){
    
    // data from props
    const { price , time , task } = props;

    return (
        <div className="w-full rounded-lg shadow-lg h-auto min-h-[160px] px-[4%] 
                py-[3%] flex flex-col justify-between my-[5%]">
            <div className="w-full h-2/5 flex justify-between text-xl">
                
                {/* task and price */}
                <div>
                    {task}
                </div>
                <div className="font-bold">
                    {price}
                </div>
            </div>

            <div className="w-full h-3/5 flex flex-col justify-between">
                
                {/* delivery time  */}
                <div className="w-full mb-1">
                    <span className="text-sky-500">
                        <i class="fa-solid fa-calendar-days"></i>
                    </span> {time}
                </div>

                {/* button for request and chat */}
                <div className="w-full flex justify-between">
                    <button className="w-[48%] border rounded-md py-1 bg-sky-500 text-white font-semibold">
                        Request Proposal
                    </button>
                    
                    <button className="w-[48%] border rounded-md py-1 border-sky-500 text-sky-500 font-semibold">
                        Chat with me
                    </button>
                </div>
            </div>
        </div>
        
    )
}