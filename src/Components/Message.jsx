
// render a singl message in chat section

export default function Message(props){
    
    // number of message for giving background color on condition
    const {index} = props;
    // message data
    const message = props.message;


    return (
        // render the message
        // if index in less than 2 background pink else background blue
        <div className={`w-fit h-auto rounded m-1 p-1 ${index > 2 ? 'bg-sky-200' : 'bg-pink-200'}   `}>
            {message}
        </div>
    )
}