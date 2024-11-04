import React from 'react'
import Navbar from "../components/Navbar"

import Footer from "../components/Footer"
import { Link } from 'react-router-dom'
const RentAnalysis = () => {
    const content = [
        {
          title: "A rent estimate based on comparable units.",
          description1: "Based on similar units nearby, we provide a comprehensive rent analysis and rent estimate to help you take the guesswork out of setting your rent price.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fe4f6c3d4-0c04-466a-858a-7330a892d4c2_Screenshot%2BProduct%2BExample_Rental%2BAnalysis%2Bscores.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75",
        },
        {
          title: "Rental benchmarks for your property.",
          description1: "No need to spend time finding and researching nearby units. An Rentles. Rent Analysis Report shares a list of comparable properties and their rent prices in minutes.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F08a41797-2240-40da-8959-10e2a4f4288a_Screenshot%2BProduct%2BExample_Rental%2BAnalysis%2BMap.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75",
        },
        {
          title: "County rent trends by bedroom and unit type.",
          description1: "Get a better idea of rent and pricing trends in your area so you can make informed decisions.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F45f4c9e0-80b9-435a-94cc-9bec46fdeecb_Screenshot%2BProduct%2BExample_Rental%2BTrends.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75",
        }
      ];
  return (                                      
    <div>
        <Navbar/>

        {/* 1st Component */}
        <div className='w-full h-screen lg:mt-[30px] mt-[100px]'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[50px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Set a competitive rent price with confidence.
                </h1>

                <p className="lg:text-[22px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                  Take the guesswork out of setting your rent price with a Rent Analysis Report, complete with rental market trends and rent 
                  comps for your area.
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
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fc4811bfd-f2a5-4318-bb30-0a394cbd88d0_product_landlord-rent-analysis_600x800.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                    alt="Hero"
                    className="w-full h-[70%] object-cover rounded-lg" 
                />
            </div>
        </div>
    </div>

        {/* 2nd Component */}

        <div className='w-full h-screen h-[950px] lg:mt-[30px] mt-[100px] bg-gray-600'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-start font-semibold leading-tight text-white">
                Use local data to set a profitable rent price.
            </h1>

            <p className="lg:text-[22px] text-[20px] text-start text-white leading-relaxed mt-8">
                See how your property compares to similar rentals nearby with a rent estimate for your property, rent benchmarks for comparable units, county rent trends, and more.
            </p>

        </div>

        <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F84cf696d-a9d0-4640-8d95-49edadd27e97_Screenshot%2BProduct%2BExample_Rent%2BAnalysis.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                alt="Hero"
                className="lg:w-full lg:h-[70%] h-[68%] object-cover rounded-lg" 
                />
            </div>
        </div>
    </div>

        {/* 3rd Component */}

        <div className="w-full lg:mt-[50px] lg:mb-[50px] mt-[100px] space-y-10 ">
      {content.map((item, index) => (
        <div
          key={index}
          className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 gap-8 pb-10 items-center lg:pt-0 pt-6"
        >
          {/* Conditional Column Order for Alternating Layout */}
          <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} w-full h-full flex items-center justify-center`}>
            <img
              src={item.image}
              alt={item.title}
              className="lg:w-[100%] lg:h-[90%] w-[85%] h-[100%] object-cover rounded-lg"
            />
          </div>

          <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} p-8 flex flex-col justify-center`}>
            <h1 className="lg:text-[40px] text-[38px] font-bold text-start leading-tight text-blue-900">
              {item.title}
            </h1>
            <p className="lg:text-[18px] text-[18px] text-start text-gray-500 leading-relaxed mt-8">
              {item.description1}
            </p>
          </div>
        </div>
      ))}
    </div>

        {/* 4th Component */}
  
        <div className='w-full h-screen h-[1200px] lg:mt-[30px] mt-[100px] bg-gray-200'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                Create a rental listing with Rentles. using rent estimate data to fill vacancies fast.
            </h1>

            <p className="lg:text-[22px] text-[20px] text-gray-400  leading-relaxed mt-8">
            Use the data from your Rent Analysis Report to set a competitive rent price and attract renters to your listing. Post your rental listing for free with Rentles. across the most popular listing sites.
            </p>

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
                src="https://images.prismic.io/avail-marketing-core/e2d390f0-b912-421a-884d-18eaffe8d436_Avail-listing_partners-logos.png?auto=compress,format"
                alt="Hero"
                className="lg:w-[550px] lg:h-[70%] h-[68%] object-cover rounded-lg" 
            />
            </div>

        </div>

        <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F5910b272-161f-4f94-b8b2-15923988cd1a_Other_Laptop%2BScreen_Analysis%2BReport.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                alt="Hero"
                className="lg:w-full lg:h-[630px] h-[70%] object-cover rounded-lg" 
                />
            </div>
        </div>
    </div>

        {/* 5th Component */}

        <div className='w-full lg:h-[400px] h-[450px] lg:mt-[20px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen  pb-10">
        <div className=" p-8 flex flex-col justify-center space-y-[30px]">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-center font-semibold leading-tight text-blue-900">
            Get your Rent Analysis Report
            </h1>

            <p className="lg:text-[20px] text-[20px]  text-gray-500 leading-relaxed mt-8">
            Create an Rentles. account to get access to a Rent Analysis Report. Simply add the property you’d like the report for and get access to the rent data instantly.
            </p>

            <div className='flex mx-auto '>
                <button className='w-[350px] p-4 bg-blue-900 text-white hover:bg-gray-600 rounded-lg uppercase font-bold'>
                    <Link to="/register">Get a rent analysis Report </Link>
                </button>
            </div>

            </div>
        </div>
    </div>

        <Footer/>
    </div>
  )
}

export default RentAnalysis