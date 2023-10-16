
// render a single step of joining 

export default function JoinStep(props) {
    
    // number of step
    const { index } = props;
    // step data
    const { heading , info , due , fees } = props.step;

    return (
        <>
        <div className="w-full md:w-[350px] lg:w-[405px] h-[266px] rounded-2xl shadow-xl my-4
                        flex flex-col p-6 justify-between bg-white relative">
            
            {/* show number of step on top corner */}
            <div className="w-[40px] h-[40px] absolute -top-2 -left-3 rounded text-white 
                        flex justify-center items-center font-bold text-lg"
                style={{background:"linear-gradient(90.97deg, #0076CE 26.63%, #9400D3 65.81%)"}}>
                {index + 1}<sup>th</sup>
            </div>
        
            {/* heading and info */}
            <div className="w-full h-[45%] px-1">
                <div className="text-center font-bold text-lg">
                    {heading}
                </div>
                <div className="text-center">
                    {info}
                </div>
            </div>
            

            <div className="w-full h-1/2 bg-[#b7b7bd40] rounded flex justify-between py-2 px-3">
                
                {/* due date */}
                <div className="w-[30%]">
                    <h1 className="text-blue-400 font-semibold">
                        Due Date
                    </h1>
                    <div>
                        {due}
                    </div>
                </div>

                {/* fees */}
                <div className="w-3/5">
                    <h1 className="text-red-400 font-semibold">
                        Penalty fees
                    </h1>
                    <div>
                        {/* if there are different scheme of fees, show each one by one */}
                        { fees.map((fee) => <h1>{fee}</h1>)}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}