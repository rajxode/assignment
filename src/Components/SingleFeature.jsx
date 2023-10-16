

// render a single feature inside featuere section
export default function SingleFeature(props) {

    // data from props
    const { icon , heading , text} = props.feature;

    return (
        <div className="w-full sm:w-[40%] md:w-[250px] lg:[300px] min-h-[95px] m-[2%]
                        flex p-1 justify-between ">
                            
            {/* feature icon */}
            <div className="w-[30%] h-full p-1">
                <img src={icon} alt="icon" className="w-full h-full" />
            </div>
            
            {/* heading and text related to text */}
            <div className="w-2/3 h-full p-1 text-lg">
                <span className="font-bold">
                    {heading}
                </span> {text}
            </div>
        </div>
    )
}