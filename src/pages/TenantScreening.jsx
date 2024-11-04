import React from 'react'
import NavBar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { TiTick } from "react-icons/ti";
const TenentScreening = () => {

  
    const grids = [
        {
          title: "Renter Profile",
          items: ["Job History", "Rental History", "Income Verification"]
        },
        {
          title: "Credit Plus",
          items: ["Job History", "Rental History", "Income Verification", "Credit Score", "Adverse Items", "Credit History"]
        },
        {
          title: "Full Screening",
          items: ["Job History", "Rental History", "Income Verification", "Credit Score", "Adverse Items", "Credit History", "Nationwide Criminal", "Terror List", "Sex Offender", "Evictions"]
        }
      ];
    
      
const content = [
    {
      title: "Tenants authorize the screening reports.",
      description1: "We’ll email your applicant instructions and provide step-by-step guidance for verifying their identity and authorizing the tenant screening reports.",
      description2:"Because it’s a tenant-initiated request (i.e., your tenant securely enters their own SSN), the information is pulled as a “soft” inquiry and won’t negatively impact a tenant’s credit score.",
      image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fb45e36f2-4119-48f8-940a-63680ff095cc_Product%2BExample_Tenant%2BScreening%2BCredit%2BCheck.png%3Fauto%3Dcompress%2Cformat&w=960&q=75",
    },
    {
        title: "Review the tenant screening reports.",
        description1: "As soon as your prospective tenant authorizes the screening reports and verifies their identity, the reports will be instantly available inside your account. We’ll also send you an email letting you know the reports are ready to be viewed.",
        description2:"Once you’ve selected a tenant, you can use our free state-specific rental lease templates to start creating a lease that’s tailored to your rental unit.",
        image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fb45e36f2-4119-48f8-940a-63680ff095cc_Product%2BExample_Tenant%2BScreening%2BCredit%2BCheck.png%3Fauto%3Dcompress%2Cformat&w=960&q=75",
      },

  ];

  const features = [
    {
      title: "Full Credit Report",
      description: "Includes credit score, tradelines with balances, debts, inquiries, and collections."
    },
    {
      title: "Identity Validation",
      description: "Using their SSN and knowledge-based questions, we confirm your applicants are who they claim to be."
    },
    {
      title: "Nationwide Criminal History",
      description: "Includes criminal history from all 50 states plus U.S. territories, OFAC Terrorist Watch List, Most Wanted List and Sex Offenders List."
    },
    {
      title: "Eviction Records",
      description: "Eviction records are cross-referenced across all 50 states, along with judgment information."
    }
  ];

  return (
        <div>
            <NavBar/>
    
            {/* 1st Component */}
            <div className='w-full lg:h-screen h-[900px] lg:mt-[80px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

    <div className=" p-8 flex flex-col justify-center ">
      <h1 className="lg:text-[47px] text-[32px] font-bold text-start font-semibold leading-tight text-blue-900">
        Screen tenants with Avail to find tenants who pay rent on time.
      </h1>

      <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
          We provide full online tenant screening services, including TransUnion credit reports, tenant background checks, and eviction history — everything you need to protect your investment and select a great tenant.
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
            src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F89850a38-c03f-4bf8-8a46-52500f42740f_Avail-Landlord-Software-product_landlord-tenant-screening_600x800.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
            alt="Hero"
            className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
        />
        </div>
        </div>
        </div>

        {/* 2nd Component */}

        <div className="w-full min-h-screen lg:mt-[20px] mt-[100px] flex flex-col items-center lg:pb-0 pb-[10px]">
          <div className="max-w-[1200px] lg:mx-auto mx-[20px] text-center">
            <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
            Select your preferred tenant screening reports.
            </h1>
            <p className="lg:text-[25px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
            Choose which rental screening reports you want to request from a prospective tenant. Decide whether you or your applicant pays — screening report costs vary based on state laws. Then simply enter your applicant’s name and email to invite them to authorize the reports.

            </p>
          </div>
    
          <div className="w-full max-w-[1200px] lg:mx-auto mx-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start mt-10">
            {grids.map((grid, index) => (
              <div key={index} className="flex flex-col p-6 space-y-4 shadow-xl rounded-lg h-full bg-white w-full">
                <h1 className="font-semibold text-blue-900 text-xl">{grid.title}</h1>
                <ul className="space-y-3">
                  {grid.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <TiTick className="text-blue-900 text-2xl" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

            {/* 3rd Component */}
            <div className="w-full lg:mt-[10px] lg:mb-[10px] mt-[100px] space-y-10 bg-gray-200">
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
              className="lg:w-[60%] lg:h-[31%] w-[85%] h-[100%] object-cover rounded-lg"
            />
          </div>

          <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} p-8 flex flex-col justify-center`}>
            <h1 className="lg:text-[40px] text-[38px] font-bold text-start leading-tight text-blue-900">
              {item.title}
            </h1>
            <p className="lg:text-[18px] text-[15px] text-start text-gray-500 leading-relaxed mt-8">
              {item.description1}
            </p>
            <p className="lg:text-[18px] text-[15px] text-start text-gray-500 leading-relaxed mt-8">
              {item.description2}
            </p>
          </div>
        </div>
      ))}
    </div>

      {/* 4th Component */}

      <div className='w-full lg:h-screen h-[900px] lg:mt-[20px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen  pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[45px] text-[30px] font-bold text-center font-semibold leading-tight text-blue-900">
                With our comprehensive online tenant screening, you can feel confident handing over the keys to your property.
            </h1>

            <p className="lg:text-[20px] text-[20px]  text-gray-500 leading-relaxed mt-8">
                Get the complete picture of any prospective tenant with a look into their financial responsibility or their background. Our online tenant screening reports ensure you have the all right information to make a decision.
            </p>

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F0d0ea5cf-119d-4915-989d-009f338e7d67_Leasing-Tenant.png%3Fauto%3Dcompress%2Cformat&w=1200&q=75"
                    alt="Hero"
                    className="lg:w-[50%] lg:h-[55%] w-[90%] h-[90%] object-cover rounded-lg" 
                />
                    </div>

                </div>
            </div>
        </div>

        {/* 5th Component */}

        <div className='w-full lg:h-[820px] h-[1100px] lg:mt-[10px] mt-[100px]'>
          <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
            {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1 lg:mt-[30px]">
              <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F59fb0e36-cd50-4a0b-9285-5862f01a7366_Product%2BExample_Tenant%2BScreening%2Boverview.png%3Fauto%3Dcompress%2Cformat&w=1200&q=75"
                alt="Hero"
                className="w-full h-auto max-h-[80%] object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>
            
            {/* Right Grid - Content Section */}
            <div className="p-8 flex flex-col justify-start space-y-6 lg:mt-[100px] mt-0">
             
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


            <Footer/>
        </div>
  )
}

export default TenentScreening