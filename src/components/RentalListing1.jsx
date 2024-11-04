import React from 'react'
import { Link } from 'react-router-dom';
const RentalListing1 = () => {
    return (
        <div className='w-full h-screen lg:mt-[20px] mt-[100px]'>
             <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
         
          <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            List your rental property for free across the top rental sites.
           
            </h1>
    
            <p className="lg:text-[25px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
            Fill vacant units fast by getting your rental listing in front of millions of renters with one click.
            </p>

            <div className="flex flex-col gap-4 items-center lg:items-start mt-[20px]">
            <div className="relative w-full lg:w-3/4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="border-2 border-blue-900 bg-white rounded-lg px-4 py-4 md:py-8 pr-32 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
              />
              <button 
                className="absolute right-2 lg:right-[6px] top-1/2 transform -translate-y-1/2 bg-blue-900 text-white py-2 md:py-5 px-4 lg:px-8 text-sm md:text-lg font-semibold hover:bg-blue-700 transition duration-300 rounded-lg"
              >
                <Link to="/register">Join Today</Link>
              </button>
            </div>
            <div className="text-center text-[20px] lg:text-[20px] mt-2">
              Already a member?{" "}
              <Link to="/login" className="text-blue-900 underline">
                Sign in here.
              </Link>
            </div>
          </div>
    
           

          </div>
    
     
          <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
              src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F859b9064-2e54-4327-ab63-72395619a8be_Avail-Landlord-Software-product_landlord-rental-listings_600x800.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
              alt="Hero"
              className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
            />
          </div>
        </div>
        </div>
      );
}

export default RentalListing1