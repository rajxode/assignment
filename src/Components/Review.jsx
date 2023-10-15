

export default function Review(props){

    const { text , author } = props.review;

    return (
        <div className="w-full h-auto max-h-2/5 bg-white rounded-md shadow-xl p-[3%] my-[4%] flex flex-col">
            <div className="text-2xl font-bold">
                What People Say ?
            </div>
            <div className="mt-1">
                {text}
            </div>
            <div className="justify-self-end">
                ~ {author}
            </div>
        </div>
        
    )
}