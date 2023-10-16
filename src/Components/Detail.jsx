
import Price from './Price';
import Review from './Review';
import About from './About';
import { useUserContext } from '../ContextAPI/userContext';
import { useNavigate } from 'react-router-dom';


export default function Detail(){

    const { singleUser } = useUserContext();
    
    return(
        <div className="pt-[10vh] px-[7%] flex flex-col md:flex-row justify-between text-lg">
            <div className="w-full md:w-[38%] flex flex-col">
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
                <Price price={singleUser.price} time={singleUser.deliveryTime} task={singleUser.taskComplexity} />
                <Review review={singleUser.testimonial} />
            </div>
            
            <div className="w-full md:w-[58%]">
                <img src={singleUser.image} alt="detail" className='rounded-xl'/>
                <div className="text-3xl font-bold mt-3">
                    About {singleUser.name}
                </div>
                <About about={singleUser.about} />
            </div>
        </div>
    )
}