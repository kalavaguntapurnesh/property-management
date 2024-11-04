
import React from 'react'
import NavBar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { TiTick } from "react-icons/ti";
const RentalApplications = () => {

    const features = [
        {
          title: "Complete renter profile",
          description: "Discover who your applicant is with a complete renter profile. Get their date of birth, contact information, pet information, and more."
        },
        {
          title: "Five-year residence history",
          description: "See your tenant’s residence history from the past five years, as well as their landlords’ contact information."
        },
        {
          title: "Automated reference checks",
          description: "We automatically email previous landlords to learn more about your tenant’s renting history."
        },
        {
          title: "Employment and income verification",
          description: "Verify income and current employment by viewing their current employer and streams of income."
        },
        {
          title: "Customize your rental application",
          description: "Create a custom rental application form with specific questions you may have for your tenant."
        },
        {
          title: "Tenant screening add-ons",
          description: "Either you or your tenant can cover the fee to add on specific reports, such as a credit or background check."
        }
      ];

      const content = [
        {
          title: "Trusted authorizations",
          description1: "The Avail team ensures an applicant’s information is correct and up to date when requesting a digital authorization.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F5d7a63bc-cba9-4dbc-9a3a-f1a91786b376_Product%2BExample_Application%2Bdocument.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75",
        },
        {
          title: "Roommate friendly",
          description1: "Renting to more than one tenant in your rental property? Group roommates together into one online rental application to make the process less time-consuming.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fd6e639f0-2965-4054-b69f-434630f0bfaa_Product%2BExample_Application%2Bapplicants.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75",
        },
        {
          title: "Compare multiple rental applications side by side.",
          description1: "Track more than one rental application and easily compare them side-by-side to identify the best fit for your rental property.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fc15f673d-c2ed-4e55-8adf-28cce62516bb_Product%2BExample_Application%2Bcredit%2Bscore.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75",
        }
      ];

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

      
  return (
    <div>
        <NavBar/>

        {/* 1st Component */}
        <div className='w-full h-screen lg:mt-[30px] mt-[100px]'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[45px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Find your next tenant with a free online rental application.
                </h1>

                <p className="lg:text-[25px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    Our customizable online rental applications provide residence histories, employment and income verifications, 
                    and everything else you need to select the right tenant.
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
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F43d8ca68-be62-43e8-9866-873fe3f0d63b_Avail-Landlord-Software-product_landlord-rental-applications_600x800.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                    alt="Hero"
                    className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
                />
            </div>
        </div>
    </div>

    {/* 2nd Component */}
    <div className="w-full lg:h-screen h-[900px] lg:mt-[10px] mt-[100px] flex flex-col items-center lg:pb-0  bg-gray-200">
    <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center">
      <h1 className="lg:text-[47px] text-[30px] font-bold text-blue-900 text-start leading-tight">
        An online renters application provides you with in-depth information on a potential tenant when looking to fill your property.
      </h1>
    </div>

    <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center">      
      <div className="p-2 flex flex-col justify-center">
        <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight">
            Create a customizable rental application.
        </h1>
        <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
            <span className='font-semibold text-blue-900 underline'><Link to={'/register'}>Create a landlord Account</Link></span> to request an online rental application in minutes with your tenant’s name and email address.
        </p>
        <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
            Our rental application form asks for five years of residence history, employment and income verification, as well as custom questions such as “Why are you moving?” for additional insights.
        </p>
      </div>

      <div className="flex justify-center">
        <img src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F615edba8-bb05-48a7-b274-c4998f6fc85f_Product%2BExample_Application%2BQuestions.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75" className="w-full h-auto lg:w-[500px]" alt="Rental Listing" />
      </div>
      
    </div>
  </div>

  {/* 3rd Component */}
  <div className='w-full lg:h-[600px] h-[700px] lg:mt-[10px] lg:mb-[10px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

        <div className="w-full h-full  flex items-center justify-center lg:col-span-1">
            <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Ff2afd3c4-d46f-48fe-b29f-cb5ddc8cad35_Product%2BExample_Application%2BResidence%2BHistory.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                alt="Hero"
                className="lg:w-[80%] lg:h-[30%] w-[85%] h-[100%] object-cover rounded-lg"
            />
        </div>


        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[40px] text-[38px] font-bold text-start font-semibold leading-tight text-blue-900">
            We make sure your tenant completes the application for your rental property.
            </h1>

            <p className="lg:text-[18px] text-[18px] text-start text-gray-500 leading-relaxed mt-8">
                Your tenant will receive easy-to-follow instructions on how to complete an Rentals. online renters application from any device.
            </p>

            <p className="lg:text-[18px] text-[18px] text-start text-gray-500 leading-relaxed mt-8">
            Rentals. automatically contacts their previous landlords to see whether they paid their rent on time and took care of the rental property. Once completed, you’ll be able to review the results directly within your Rentals. account.
            </p>

        </div>
        </div>
    </div>

    {/* 4th Component */}

    <div className='w-full lg:h-screen h-[750px] lg:mt-[10px] mt-[100px] bg-gray-200'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                Experience a simple rental application process.
            </h1>
            <p className="lg:text-[15px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                Review the full rental application and screening reports on any device to decide if the applicant meets the criteria for 
                your rental. If approved, you can draft a state-specific lease with one click.
            </p>
            
        </div>

        
        <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F9ee2cf26-2f66-4129-9ec9-2512c4a92d1a_Product%2BExample_Application%2BScreen.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                alt="Hero"
                className="w-[80%] h-[40%] object-cover rounded-lg" 
            />
        </div>
      
        </div>
    </div>

    {/* 5th Component */}

    <div className='w-full h-screen lg:mt-[20px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen  pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-center font-semibold leading-tight text-blue-900">
                Protect your investment with our online rental applications.
            </h1>

            <p className="lg:text-[20px] text-[20px]  text-gray-500 leading-relaxed mt-8">
                We’ve crafted a comprehensive Rentals. renters application to provide you with all the data you need without the hassle for both you and your tenants.
            </p>

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F0e653bc9-18dd-4a78-be74-b619c7a2f58c_splash_payments-tenant_600x600.png%3Fauto%3Dcompress%2Cformat&w=1200&q=75"
                    alt="Hero"
                    className="lg:w-[50%] lg:h-[55%] w-[90%] h-[90%] object-cover rounded-lg" 
                />
            </div>

                </div>
            </div>
        </div>

        {/* 6th Component */}

        <div className='w-full lg:h-[1100px] h-[1650px] lg:mt-[10px] mt-[100px]'>
      <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
        
        {/* Image Section */}
        <div className="w-full h-full flex items-center justify-center lg:col-span-1">
          <img
            src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fafe78b2f-3866-43c0-8155-0171f1635aee_Product%2BExample_Application.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
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

    {/* 7th Component */}

    <div className="w-full lg:mt-[10px] lg:mb-[10px] mt-[100px] space-y-10 bg-gray-200">
      {content.map((item, index) => (
        <div
          key={index}
          className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 gap-8 pb-10 items-center lg:pt-0 pt-6"
        >
          {/* Conditional Column Order for Alternating Layout */}
          <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} w-full h-full flex items-center justify-center`}>
            <img
              src={item.image}
              alt={item.title}
              className="lg:w-[80%] lg:h-[60%] w-[85%] h-[100%] object-cover rounded-lg"
            />
          </div>

          <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} p-8 flex flex-col justify-center`}>
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

    {/* 8th Component */}

    <div className="w-full min-h-screen lg:mt-[20px] mt-[100px] flex flex-col items-center lg:pb-0 pb-[10px]">
      <div className="max-w-[1200px] lg:mx-auto mx-[20px] text-center">
        <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
          Free rental application for landlords.
        </h1>
        <p className="lg:text-[25px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
          Complete the online rental application process by adding on comprehensive tenant background reporting at no cost to you. Avail collects money directly from the applicant, alleviating the financial cost from the landlord. Fill vacant units fast by getting your rental listing in front of millions of renters with one click.
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


        <FAQ/>
        <Footer/>
    </div>
  )
}

export default RentalApplications