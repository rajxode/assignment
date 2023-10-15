


export default function JoinStep(props) {
    const { heading , info , due , fees } = props.step;

    return (
        <div className="w-[405px] h-[266px] rounded-lg shadow-xl my-4
                        flex flex-col p-6 justify-between">
            <div className="w-full h-[45%] px-1">
                <div className="text-center font-bold text-lg">
                    {heading}
                </div>
                <div className="text-center">
                    {info}
                </div>
            </div>
            
            <div className="w-full h-1/2 bg-[#b7b7bd40] rounded flex justify-between py-2 px-3">
                
                <div className="w-[30%]">
                    <h1 className="text-blue-400 font-semibold">
                        Due Date
                    </h1>
                    <div>
                        {due}
                    </div>
                </div>
                <div className="w-3/5">
                    <h1 className="text-red-400 font-semibold">
                        Penalty fees
                    </h1>
                    <div>
                        { fees.map((fee) => <h1>{fee}</h1>)}
                    </div>
                </div>
            </div>
        </div>
    )
}