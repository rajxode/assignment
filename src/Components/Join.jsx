
// component
import JoinStep from "./JoinStep"

// steps of join
const stepsToJoin = [
	{	
		// heading 
		heading:'Commencement of business',
		// text
		info:'Invested shareholders must confirm payment and office address ',
		// due date
		due:'Within 180 days',
		// feess
		fees:['₹50000 for the company','₹1000/day for director']
	},
	{
		heading:'Auditor Appointment',
		info:'Company informs new auditor and submits ADT.1 form to ROC.',
		due:'Within 30 days',
		fees:['₹300 per month.']
	},
    {
		heading:'DIN eKYC',
		info:'Directors share personal information for identification & verification ',
		due:'Every Year',
		fees:['₹5000 one time']
	},
    {
		heading:'DPT-3',
		info:'Companies report money taken from people to ROC; auditors confirm details.',
		due:'Within 30 days',
		fees:['₹300 per month']
	},
    {
		heading:'MCA Form AOC-4',
		info:"It's like an official report card for a company's documents",
		due:'On or Before 30th November',
		fees:['₹200 per day (No Upper limit)*']
	},
    {
		heading:'MCA Form MGT-7',
		info:'Companies must annually report activities and finances to the registrar.',
		due:'On or Before 31th December',
		fees:['₹200 per day (No Upper limit)*']
    }
];


// render the join section
export default function Join(){
    return(
        <>
            <div className="w-full h-fit flex flex-col px-[7%] py-[100px] bg-slate-100">
                
				{/* heading */}
                <div className="w-full flex flex-col text-center">
                    <div className="text-6xl font-bold mb-[1%]">
                        Want to 
                        <span style={{background: "linear-gradient(90.97deg, #0076CE 26.63%, #9400D3 65.81%)" , 
                                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}> Join </span>
                        Us ?
                    </div>

                    <div className="font-semibold">
                        To remain with us, it is essential that you diligently follow the steps provided
                    </div>
                </div>
				

				{/* show each step of joining one by one */}
                <div className="w-full flex justify-between items-center flex-wrap">
                    {stepsToJoin.map((step,i) => <JoinStep key={i} step={step} index={i} />)}
                </div>
				

				{/* terms and conditions text */}
                <div className="w-full flex">
                    *For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 everyday until you file the form . 
                    There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form.
                </div>
            </div>
        </>
    )
}
