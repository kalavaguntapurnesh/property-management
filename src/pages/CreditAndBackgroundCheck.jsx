import React from 'react'
import NavBar from '../components/Navbar'

import CreditAndBackgroundCheckFAQs from '../components/CreditAndBackgroundCheckFAQs'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const CreditAndBackgroundCheck = () => {

    const features = [
        {
          title: "Credit score",
          description: "Get your applicant’s up-to-date TransUnion credit score to see how reliable they are as a credit borrower."
        },
        {
          title: "Credit insights",
          description: "Discover what’s contributing to their current credit score before signing an online rental lease agreement."
        },
        {
          title: "Account summaries",
          description: "View the current balance of all existing accounts on their credit report, as well as past due amounts."
        },
        {
          title: "Tradelines",
          description: "Determine your applicant’s reliability by getting their payment history on all of their current tradelines."
        }
      ];


      const features1 = [
        {
          title: "Federal watch lists",
          description: "Cross-reference your applicant against national and federal watch lists, including America's Most Wanted."
        },
        {
          title: "State reports",
          description: "Check against each state and U.S. territory database for criminal records at the state and county levels."
        },
        {
          title: "National Sex Offender Registry",
          description: "Protect your existing tenants and local neighbors by determining if an applicant is on the National Sex Offender Registry."
        },
        {
          title: "OFAC watch lists",
          description: "Identify any potential linkage to terrorist activity with information from the Office of Foreign Asset Control (OFAC)."
        }
      ];
    
      const features2 = [
        {
          title: "Check across all states",
          description: "Run an eviction background check across all 50 states and their individual county records."
        },
        {
          title: "Confirm offender name",
          description: "Confirm whether or not your applicant was involved in the eviction process."
        },
        {
          title: "Eviction summary judgment",
          description: "See the final summary judgement that was provided."
        },
        {
          title: "Eviction date",
          description: "View the dates the eviction process took place."
        }
      ];
    
  return (
    <div>
        <NavBar/>

        {/* 1st Component */}
        <div className='w-full h-screen lg:mt-[80px] mt-[100px]'>
            <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

            <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[45px] text-[32px] font-bold text-start font-semibold leading-tight text-blue-900">
            Conduct a comprehensive tenant background check in minutes.
            </h1>

            <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
            Thoroughly check your tenant’s credit history, criminal background, and eviction reports — all in one place.
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
            src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F2f17ada9-ae93-43b3-9b0f-70c471d1f2a4_Avail-Landlord-Software-product_landlord-credit-background-check_600x800.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
            alt="Hero"
            className="w-full h-[70%] object-cover rounded-lg" 
        />
        </div>
     </div>
    </div>

    {/* 2nd Component */}

    <div className='w-full h-screen lg:mt-[20px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen  pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-center font-semibold leading-tight text-blue-900">
            A tenant background check can help you identify good candidates for your rental property and avoid costly evictions.
            </h1>

            <p className="lg:text-[20px] text-[20px]  text-gray-500 leading-relaxed mt-8">
            Using Rental. to screen your tenants means you get the data you need to make informed decisions about the future of your property.
            </p>

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F64251cb0-8021-423a-aa49-8ab5eba0462c_splash_investigator_600x600-min.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                    alt="Hero"
                    className="lg:w-[50%] lg:h-[55%] w-[90%] h-[90%] object-cover rounded-lg" 
                />
                </div>

                </div>
            </div>
        </div>

    {/* 3rd Component */}

    <div className='w-full lg:h-[850px] h-[1250px] lg:mt-[10px] mt-[100px]'>
             <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center lg:mt-[100px] lg:ml-[200px] ml-[50px]">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
                    Tenant Credit Report
                </h1>
                <p className='lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8'>
                    See how an applicant handles their personal finances and existing credit with a TransUnion-backed tenant credit check.
                </p>
            </div>
          <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
            {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
              <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F8be55066-c9c6-49c8-b45f-0c4c344f79a1_Product%2BExample_Reports_Overview.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                alt="Hero"
                className="w-full h-auto max-h-[80%] object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>
            
            {/* Right Grid - Content Section */}
            <div className="p-8 flex flex-col justify-start space-y-6 lg:mt-[50px] mt-0">
             
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold">
                      {index + 1}
                    </div>
                    <div className='text-start space-y-4'>
                      <p className="text-blue-900 font-semibold lg:text-[25px]">{feature.title}</p>
                      <p className="text-gray-900 text-[16px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4th Component */}

        <div className='w-full lg:h-[950px] h-[1400px] lg:mt-[10px] mt-[100px]'>
             <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center lg:mt-[100px] lg:ml-[200px] ml-[50px]">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
                    Tenant Criminal History Check
                </h1>
                <p className='lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8'>
                    Run a tenant criminal background check to better understand previous felonies and misdemeanors on their record.
                </p>
            </div>
          <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
            {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
              <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F5c72cd14-de27-4a65-b8e8-ba83cc3ab66b_Product%2BExample_Reports_Criminal%2BRecords.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                alt="Hero"
                className="w-full h-auto max-h-[80%] object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>
            
            {/* Right Grid - Content Section */}
            <div className="p-8 flex flex-col justify-start space-y-6 lg:mt-[50px] mt-0">
             
              <div className="space-y-4">
                {features1.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold">
                      {index + 1}
                    </div>
                    <div className='text-start space-y-4'>
                      <p className="text-blue-900 font-semibold lg:text-[25px]">{feature.title}</p>
                      <p className="text-gray-900 text-[16px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    
        {/* 5Th component */}
        
        <div className='w-full lg:h-[700px] h-[850px] lg:mt-[10px] mt-[100px]'>
             <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center lg:mt-[100px] lg:ml-[200px] ml-[50px]">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
                    Tenant Eviction Report
                </h1>
                <p className='lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8'>
                    Learn if a tenant has been through a previous eviction with an eviction check for all 50 states.
                </p>
            </div>
          <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
            {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
              <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F4bf59465-0097-4ccc-8de3-17adc82504d6_Product%2BExample_Reports_Eviction%2BRecords.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                alt="Hero"
                className="w-full h-auto max-h-[80%] object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>
            
            {/* Right Grid - Content Section */}
            <div className="p-8 flex flex-col justify-start space-y-6 lg:mt-[50px] mt-0">
             
              <div className="space-y-4">
                {features2.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold">
                      {index + 1}
                    </div>
                    <div className='text-start space-y-4'>
                      <p className="text-blue-900 font-semibold lg:text-[25px]">{feature.title}</p>
                      <p className="text-gray-900 text-[16px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6th Component */}

        <div className="w-full lg:h-screen h-[900px] lg:mt-[10px] mt-[100px] flex flex-col items-center lg:pb-0  bg-gray-200">
        <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center ">
          <h1 className="lg:text-[47px] text-[30px] font-bold text-blue-900 text-start leading-tight lg:mt-[50px]">
            Easily Run a Rental Background Check With Avail          
          </h1>
        </div>
    
        <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center">    

            <div className="flex justify-center">
                <img src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F35450ae6-61bc-40e4-a2fd-b3716f5e87f9_Product%2BExample_Reports.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75" className="w-full h-auto lg:w-[500px]" alt="Rental Listing" />
            </div>

          <div className="p-2 flex flex-col justify-center">
            <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight">
                Request a tenant background check.
            </h1>
            <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
                <span className='font-semibold text-[22px] text-blue-900 underline'><Link to={'/register'}>Create a landlord Account</Link></span> to request a TransUnion-backed credit report, criminal background check, and nationwide eviction report from your tenant.
            </p>
            <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
                Either you or your tenant can cover the fee of a credit report alone or bundle all three reports together. Screening report costs vary by location due to state laws.
            </p>
          </div>
        </div>
      </div>

        {/* 7th Component */}

        <div className='w-full lg:h-600px] h-[750px] lg:mt-[10px] mt-[100px] '>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Get tenant authorization in minutes.
                </h1>
                <p className="lg:text-[15px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    We’ll reach out to your tenant with step-by-step guidance to authorize the tenant background check. Once we’ve received their approval, you’ll have access to their eviction, credit, and background check in less than five minutes.
                </p>
                
            </div>
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F56f4af7c-c31f-40d1-ace7-e3b0f2a1b94f_Product%2BExample_Reports_Trans%2BUnion.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                    alt="Hero"
                    className="lg:w-full lg:h-[40%] w-[90%] h-[80%] object-cover rounded-lg" 
                />
            </div>
        </div>
    </div>

    {/* 8th Component */}

    <div className='w-full lg:screen h-[750px] lg:mt-[10px] mt-[100px] bg-gray-200'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F72438591-5111-4dec-bf8c-d2ed85eeecdb_Product%2BExample_Reports_Trans%2BUnion%2BFlag.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                    alt="Hero"
                    className="lg:w-full lg:h-[50%] w-[90%] h-[80%] object-cover rounded-lg" 
                />
            </div>


            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Review your tenant’s credit, criminal, and eviction reports with ease.
                </h1>
                <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    Our comprehensive landlord background check shares insights on your applicant’s financial health and renting history in an easy-to-digest format.
                </p>
                
            </div>
           
        </div>
    </div>


        <CreditAndBackgroundCheckFAQs/>
        <Footer/>
    </div>
  )
}

export default CreditAndBackgroundCheck