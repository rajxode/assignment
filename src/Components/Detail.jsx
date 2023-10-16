
// context api
import { useUserContext } from '../ContextAPI/userContext';

// components
import Price from './Price';
import Review from './Review';
import About from './About';


// render the detail section on detail page
export default function Detail(){

    // CA's data
    const { singleUser } = useUserContext();


    return(
        <div className="pt-[10vh] px-[7%] flex flex-col md:flex-row justify-between text-lg">
            <div className="w-full md:w-[38%] flex flex-col">
                
                {/* name , intro and review count */}
                <div className='w-full my-[2%]'>
                    <div className='text-3xl font-bold'>
                        {singleUser.name}
                    </div>
                    <div className=' my-3'>
                        {singleUser.intro}
                    </div>
                    <div>
                        <span className='text-sky-500 font-bold'>
                            <i class="fa-solid fa-star"></i> {singleUser.rating}
                        </span> ( {singleUser.reviewCount} )
                    </div>
                </div>

                {/* price card of CA */}
                <Price price={singleUser.price} time={singleUser.deliveryTime} task={singleUser.taskComplexity} />

                {/* Review by people */}
                <Review review={singleUser.testimonial} />
            </div>
            

            <div className="w-full md:w-[58%]">
                
                <div className="w-full h-[45vh] bg-cover" style={{backgroundImage:'url(./detail.png)'}}>
                    {/* image of CA */}
                    <img src={singleUser.image} alt="detail" className='rounded-xl'/>
                </div>
                
                
                {/* show About section */}
                <div className="text-3xl font-bold mt-3">
                    About {singleUser.name}
                </div>
                {/* about section */}
                <About about={singleUser.about} />
            </div>
        </div>
    )
}