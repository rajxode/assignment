

export default function Header(){
    return(
        <div className="w-full h-[70vh] flex px-[7%] py-[20px] justify-between bg-slate-100" 
            style={{backgroundImage: "linear-gradient(138deg, rgb(255 255 255) 0%, rgb(213 241 253) 100%)"}} >
            
            <div className="w-1/2 h-full flex flex-col my-6">
                <div className="mb-6 h-2/3 flex flex-col ">
                    <div className="text-6xl font-bold mb-[1%]">
                        Find
                        <span style={{background: "linear-gradient(90.97deg, #0076CE 26.63%, #9400D3 65.81%)" , WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}> Partners </span>
                        (CAs) available online
                    </div>
                    <div className="text-slate-400 mt-[2%]">
                        <b>CONNECT </b>
                        with us where your services arel isted and visible to a myriad of businesses seeking CA's for compliance support
                    </div>
                </div>
                
                <div className="w-full h-1/3">
                    <input 
                        type="text" 
                        placeholder="Search by name"
                        className="border py-1 px-2 rounded rounded-r-none w-3/5 h-[50px]" />
                        
                    <button className="py-1 px-2 rounded rounded-l-none bg-sky-600 text-white w-1/5 h-[49px]">
                        Search
                    </button>
                </div>
                
            </div>
            
            <div className="w-[45%] h-full flex flex-wrap justify-between">
                <div className="w-[32%] h-full">
                    <img src='/head-1.png' alt="image" className="w-full" />
                </div>
                <div className="w-[32%] h-full">
                    <img src='/head-2.png' alt="image" className="w-full" />
                </div>
                <div className="w-[32%] h-full">
                    <img src='/head-3.png' alt="image" className="w-full" />
                </div>
            </div>
        </div>
    )
}



