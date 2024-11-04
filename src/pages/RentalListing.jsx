

import React from 'react'
import NavBar from '../components/Navbar'
import RentalListing1 from '../components/RentalListing1'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const RentalListing = () => {
  return (
    <div>
        <NavBar/>
        <RentalListing1/>
        {/* <RentalListing2/> */}

        <div className="w-full h-screen lg:mt-[10px] mt-[100px] flex flex-col items-center lg:pb-0 pb-[10px]">
            <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
                Find renters fast by posting your rental listing on the top rental sites they're searching on.
                </h1>
            </div>

            <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center">
                <div className="flex justify-center">
                <img src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F89250e0b-6cad-4c17-8144-b498d3bf56f0_Product%2BImage%2BCreate%2Ba%2BListing.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75" className="w-full h-auto lg:w-[500px]" alt="Rental Listing" />
                </div>
                
                <div className="p-2 flex flex-col justify-center">
                <h1 className="lg:text-[35px] text-[30px] font-semibold text-start text-blue-900 leading-tight">
                    List your rental property for free across the top rental sites.
                </h1>
                <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
                    Fill vacant units fast by getting your rental listing in front of millions of renters with one click.
                </p>
                </div>

                
            </div>
        </div>

        {/* 3 rd Component */}

        <div className='w-full lg:h-screen h-[820px] lg:mt-[10px] mt-[100px] bg-gray-200'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Find great renters fast
                </h1>
                <p className="lg:text-[15px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    List your apartment, condo, townhome, or house through Rentals. to appear on highly visited sites like Realtor.com®, 
                    Apartments.com, Redfin, and more. With just one click, 
                    your rental listing will show across a dozen sites to increase your overall visibility.
                </p>
                
            </div>
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fbb108ab7-751a-400a-abf0-629160a4ddb9_Avail-listing_partners%2B2.png%3Fauto%3Dcompress%2Cformat&w=960&q=75"
                    alt="Hero"
                    className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
                />
            </div>
        </div>
    </div>

    {/* 4th component */}
    <div className='w-full h-screen lg:mt-[20px] mt-[100px]'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fc4811bfd-f2a5-4318-bb30-0a394cbd88d0_product_landlord-rent-analysis_600x800.png%3Fauto%3Dformat%2Ccompress&w=1440&q=75"
                    alt="Hero"
                    className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
                />
            </div>


            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Price your rental right
                </h1>

                <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    Get insights on local rental comps and demand with our Rent Analysis report. Use our report to set a competitive rent price to include in your listing.
                </p>

                <div className="text-start lg:text-[27px] text-[20px] mt-8">
                    <span className="underline font-semibold text-blue-900">
                        <Link to={"#"}>Learn More </Link>
                    </span>
                </div>

            </div>
        </div>
    </div>

        {/* 5th Component  */}

        <div className='w-full lg:h-screen h-[800px] lg:mt-[10px] mt-[100px] bg-gray-200'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[45px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                Streamlined tenant screening
                </h1>
                <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    Easily request rental applications and screening reports from interested renters who inquired through your rental listing. 
                    Request rental applications, screening reports, and landlord references in one platform..
                </p>
                
                <div className="text-start lg:text-[27px] text-[20px] mt-8">
                <span className="underline font-semibold text-blue-900">
                    <Link to={"#"}>Learn More .</Link>
                </span>
            </div>

            </div>
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fa5806c11-f4f7-4cda-a75d-f236ef268fdb_Screenshot%2BProduct%2BExample_Screening.png%3Fauto%3Dformat%2Ccompress&w=1440&q=75"
                alt="Hero"
                className="w-full lg:h-[70%] h-full object-cover rounded-lg" 
                />
          </div>
        </div>
    </div>

        {/* 6th Component */}

        <div className='w-full lg:h-screen h-[800px] lg:mt-[10px] mt-[100px]'>
      <div className="max-w-[1200px] lg:mx-auto mx-[10px] h-full grid lg:grid-cols-2 pb-10">
        <div className="p-8 flex flex-col justify-center">
          <h1 className="lg:text-[50px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            How to post your rental on Rentals.
          </h1>
          
          <ol className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8 list-decimal list-inside">
            <li>Add property details with high-quality images</li>
            <li>Add a detailed rental listing title and description</li>
            <li>Set your rent price and required fees</li>
            <li>Publish your rental listing to share with renters</li>
          </ol>
          
          <div className="mt-8">
            <Link 
              to={"/register"} 
              className="text-start bg-blue-900 text-white text-start font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-all">
              Get Started
            </Link>
          </div>
        </div>
        
        <div className="w-full h-full flex items-center justify-center lg:col-span-1">
          <img
            src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2FZs9W6kaF0TcGJfGI_Publishalisting.png%3Fauto%3Dformat%2Ccompress&w=1080&q=75"
            alt="Hero"
            className="w-full lg:h-[70%] h-full object-cover rounded-lg" 
          />
        </div>
      </div>
    </div>

    {/* 7th component */}

    <div className="w-full lg:h-screen h-[1550px] lg:mt-[10px] mt-[230px] flex flex-col items-center lg:pb-0 pb-[10px] bg-gray-200">
      <div className="max-w-[1200px] lg:mx-auto  mx-[10px] lg:px-[10px] px-[10px] text-center mt-[100px]">
        <h1 className="text-start lg:text-[55px] text-[35px] font-bold text-blue-900 leading-tight">
          Additional Rentals features for landlords
        </h1>
      </div>

      <div className="max-w-[1200px] lg:mx-auto lg:px-[20px] px-[10px] h-full grid lg:grid-cols-3 items-center">
        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F536aeeec-b4c4-4460-88a0-5cafd109ab3e_Spot%2BIllustration%2BScreening.png%3Fauto%3Dformat%2Ccompress&w=384&q=75" alt="Tenant Screening" />
          <h1 className="lg:text-[34px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Tenant Screening
          </h1>
          <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-4">
            Screen interested renters with trusted rental application templates and screening reports.
          </p>
          <div className="text-start lg:text-[27px] text-[20px] mt-4">
            <span className="underline font-semibold text-blue-900">
              <Link to="#">Learn More</Link>
            </span>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fdc021cf0-b85f-4231-b2b6-8643b8fda6de_Spot%2BIllustration%2BPayments.png%3Fauto%3Dformat%2Ccompress&w=384&q=75" alt="Online Rent Collection" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Online Rent Collection
          </h1>
          <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-4">
            Easily collect rent payments, deposits, and fees from one or multiple renters.
          </p>
          <div className="text-start lg:text-[27px] text-[20px] mt-4">
            <span className="underline font-semibold text-blue-900">
              <Link to="#">Learn More</Link>
            </span>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F0462b0df-a025-4868-94f2-6282af79e94e_Spot%2BIllustration_Document%2BStorage.png%3Fauto%3Dformat%2Ccompress&w=384&q=75" alt="Lawyer-reviewed lease documents" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Lawyer-reviewed lease documents
          </h1>
          <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-4">
            Access state-specific lease agreement and addendum templates.
          </p>
          <div className="text-start lg:text-[27px] text-[20px] mt-4">
            <span className="underline font-semibold text-blue-900">
              <Link to="#">Learn More</Link>
            </span>
          </div>
        </div>
      </div>
    </div>


        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default RentalListing