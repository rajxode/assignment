
// render the review section

export default function Review(props){

    // text and reviewer
    const { text , author } = props.review;

    return (

        <div className="w-full h-auto max-h-2/5 bg-white rounded-md shadow-xl p-[3%] my-[4%] flex flex-col">
            {/* heading */}
            <div className="text-2xl font-bold">
                What People Say ?
            </div>
            {/* text */}
            <div className="mt-1">
                {text}
            </div>
            {/* reviewer */}
            <div className="justify-self-end">
                ~ {author}
            </div>
        </div>
        
    )
}