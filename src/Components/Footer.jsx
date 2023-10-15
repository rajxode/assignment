

export default function Footer(){

    return(
        <>
            <div className="w-full h-[30%] flex flex-col text-white" style={{backgroundImage: "linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%)"}}>

                <div className="w-full h-[85%] px-[5%] flex flex-col py-2">
                    <div className="h-4/5 flex justify-between w-full">
                        <div className="w-1/5 h-full flex flex-col">
                            <div>

                            </div>

                            <div>
                                India's first platform dedicated to simplifying partner search
                            </div>
                        </div>
                        
                        <div className="w-4/5 h-full flex justify-around">
                            <div className="w-1/5 flex flex-col h-full">
                                <h1 className="font-semibold">
                                    COMPANY
                                </h1>
                                <a>
                                    About
                                </a>
                                <a>
                                    Pricing
                                </a>
                                <a>
                                    Careers
                                </a>
                            </div>
                            <div className="w-1/5 flex flex-col h-full">
                                <h1 className="font-semibold">
                                    SOLUTIONS
                                </h1>
                                <a>
                                    Search
                                </a>
                                <a>
                                    Connect
                                </a>
                                <a>
                                    Research
                                </a>
                                <a>
                                    Academy
                                </a>
                            </div>
                            <div className="w-1/5 flex flex-col h-full">
                                <h1 className="font-semibold">
                                    RESOURCES
                                </h1>
                                <a>
                                    Blogs
                                </a>
                                <a>
                                    Forms
                                </a>
                            </div>
                            <div className="w-1/5 flex flex-col h-full">
                                <h1 className="font-semibold">
                                    SUPPORT
                                </h1>
                                <a>
                                    Help
                                </a>
                                <a>
                                    Contact Us
                                </a>
                            </div>
                            <div className="w-1/5 flex flex-col h-full">
                                <h1 className="font-semibold">
                                    LEGAL
                                </h1>
                                <a>
                                    Privacy
                                </a>
                                <a>
                                    Terms
                                </a>
                                <a>
                                    Accessibility
                                </a>
                            </div>
                        </div>
                        
                    </div>

                    <hr />
                    
                    <div className="flex justify-between items-center h-1/5">
                        <div className="w-[90%]">
                            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra
                        </div>

                        <div className="flex justify-around w-[10%]">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
                
                <div className="w-full h-[15%] flex items-center justify-center bg-black">
                    <p className="text-sm">
                        Registerd trademark of India Private Limited 2023 loerumipsum Inc. All Rights Reserved.
                    </p>
                </div>

            </div>
        </>
    )
}