

export default function About(props){

    const { from , partnerSince , averageResponseTime , description , services , benefits } = props.about;

    return (
        <div className="w-full p-[3%] flex flex-col justify-between">
            <div className="w-full flex justify-between my-[2%]">
                <div className="w-1/5">
                    <span className="text-sm font-semibold text-slate-400">
                        FROM
                    </span>
                    <br/>
                    {from}
                </div>
                <div className="w-1/5">
                    <span className="text-sm font-semibold text-slate-400">
                        PARTNER SINCE
                    </span>
                    <br/>
                    {partnerSince}
                </div>
                <div className="w-2/5">
                    <span className="text-sm font-semibold text-slate-400">
                        AVERAGE RESPONSE TIME
                    </span>
                    <br/>
                    {averageResponseTime}
                </div>
            </div>
            <div className="w-full my-[2%]">
                <span className="text-sm font-semibold text-slate-400">
                    ABOUT
                </span>
                <div>
                    {description}
                </div>
            </div>
            <div className="w-full flex justify-between my-[2%]">
                <div className="w-2/5">
                    <span className="text-sm font-semibold text-slate-400">
                        SERVICES | OFFER
                    </span>
                    <div className="w-full px-[2%]">
                        <ul className="list-disc">
                            {services.map((service) => <li>{service}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="w-2/5">
                    <span className="text-sm font-semibold text-slate-400">
                        WHY ME ?
                    </span>
                    <div className="w-full px-[2%]">
                        <ul className="list-disc">
                            {benefits.map((benefit) => <li>{benefit}</li>)}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}