
// feature section on homepage


// components
import Message from "./Message";
import SingleFeature from "./SingleFeature";


// chat message
const chat = ['Hey, check out loreumipsum services.',
            'I learned from their videos, got my first job.',
            "You won't be disappointed with their services. ",
            'I got a perfect analysis report from them too',
            "Oh, that's great",]


//  features to show
const features = [
                    //  icon of menu , heading of feature , text of feature
                    {
                        icon:'/search.png',
                        heading:'SEARCH',
                        text:'for vital company information'
                    },
                    {
                        icon:'/connect.png',
                        heading:'CONNECT',
                        text:'with the resources to meet your business needs'
                    },
                    {
                        icon:'/reserach.png',
                        heading:'RESEARCH',
                        text:'and generate report that drive growth'
                    },
                    {
                        icon:'/degree.png',
                        heading:'ACADEMY',
                        text:'to give you the skills for success in your career'
                    }
                ];


// render the feature section 
export default function Features(){
    return(
        <>
            <div className="w-full flex flex-col md:flex-row px-[7%] py-[100px] bg-slate-100 justify-between">
                
                {/* heading of section */}
                <div className="w-full md:w-1/2 flex flex-col h-full">
                    <div className="text-6xl font-bold mb-[1%]">
                        <span style={{background: "linear-gradient(90.97deg, #0076CE 26.63%, #9400D3 65.81%)" , 
                                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}
                        > 
                        All-in-one
                        </span> platform that Makes Easier
                    </div>

                    {/* text  */}
                    <div className="w-full text-xl">
                        We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals
                    </div>  
                    
                    {/* show each of the feature with icon , heading and text */}
                    <div className="w-full flex flex-wrap justify-around px-[2%]">
                        {features.map((feature,i) => <SingleFeature key={i} feature={feature} />)}
                    </div>
                </div>
                
                
                {/* show image and chats  */}
                <div className="w-full md:w-1/2 lg:w-[45%] flex justify-between h-full">
                    
                    <div className="w-3/5 flex flex-col justify-between h-full">
                        {/* chat message */}
                        <div className="h-2/5 w-full flex flex-col items-end">
                            {chat.map((message,i) => <Message key={i} message={message} index={i} />)}
                        </div>
                        
                        {/* image of teacher (female) */}
                        <div className="h-3/5 w-full">
                            <img src="/Teacher.png" alt="teacher" />
                        </div>
                    </div>
                    
                    {/* image of student (male) */}
                    <div className="w-1/2 h-full">
                        <img src="/Student.png" alt="student"/>
                    </div>
                </div>
            </div>
        </>
    )
}
