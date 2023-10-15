

export default function Message(props){
    const {index} = props;
    const message = props.message;


    return (
        <div className={`w-fit h-auto rounded m-1 p-1 ${index > 2 ? 'bg-sky-200' : 'bg-pink-200'}   `}>
            {message}
        </div>
    )
}