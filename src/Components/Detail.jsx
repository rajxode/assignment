
import Price from './Price';
import Review from './Review';
import Address from './Address';
import Info from './Info';
import Services from './Services';
import About from './About';

export default function Detail(){

    const user = {
        "id": 1,
        "name": "Michael Jackson",
        "image": "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80",
        "intro": "Expertise in accounting and finance, specializing in financial statements and auditing.",
        "rating": 4.8,
        "reviewCount": 89,
        "taskComplexity": "Basic to complex tasks",
        "price": "€4,370",
        "deliveryTime": "Delivers within 2 days",
        "testimonial": {
          "text": "Exceptional service in managing personal finances and deep understanding of financial markets.",
          "author": "John Doe"
        },
        "about": {
          "from": "INDIA",
          "partnerSince": 2011,
          "averageResponseTime": "30 minutes",
          "description": "Professional Chartered Accountant offering diverse accounting and financial services.",
          "services": ["Financial accounting", "Bookkeeping", "Balance Sheets"],
          "benefits": ["One-time delivery", "24/7 support"]
        }
      };

    return(
        <div className="pt-[10vh] px-[7%] flex justify-between text-lg">
            <div className="w-[38%] flex flex-col">
                <div className='w-full my-[2%]'>
                    <div className='text-3xl font-bold'>
                        {user.name}
                    </div>
                    <div className=' my-3'>
                        {user.intro}
                    </div>
                    <div>
                        <span className='text-sky-500 font-bold'>
                            <i class="fa-solid fa-star"></i> {user.rating}
                        </span> ( {user.reviewCount} )
                    </div>
                </div>
                <Price price={user.price} time={user.deliveryTime} task={user.taskComplexity} />
                <Review review={user.testimonial} />
            </div>
            
            <div className="w-[58%]">
                <img src={user.image} alt="detail" className='rounded-xl'/>
                <div className="text-3xl font-bold mt-3">
                    About {user.name}
                </div>
                <About about={user.about} />
            </div>
        </div>
    )
}