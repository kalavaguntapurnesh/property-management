import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const MaintenanceTracking = () => {
    const content = [
        {
          title: "Tenants can quickly submit maintenance requests online.",
          description1: "Your tenant can submit a maintenance request through their account whenever they need. You’ll be notified via email when a request is submitted.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F86145713-7d06-4185-960c-ed5635b0825e_Product_Example_Maintenance_Request.png%3Fauto%3Dcompress%2Cformat&w=960&q=75",
        },
        {
          title: "Easily communicate with tenants about rental property repairs.",
          description1: "With photos of the issue and in-app instant messaging, you can understand the issue in minutes without having to visit the property.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fb6a8afa2-36a2-471a-8ef9-c96e6ef5d8ab_Product%2BExample_Service%2BRequest.png%3Fauto%3Dcompress%2Cformat&w=960&q=75",
        },
        {
          title: "Keep a record of how and when maintenance issues are resolved.",
          description1: "Tenants can see whether a maintenance ticket is pending or completed. You can even add an expense amount to the ticket to keep your financials in order, and everything is logged in your account in case you need it later.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fb6a8afa2-36a2-471a-8ef9-c96e6ef5d8ab_Product%2BExample_Service%2BRequest.png%3Fauto%3Dcompress%2Cformat&w=960&q=75",
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
                Manage rental property maintenance without the headache.
                </h1>

                <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                Avail makes handling repairs easier with landlord maintenance software. Track repairs with in-app messaging, photos, and automatic maintenance records.
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
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F58f87801-95d0-4eb6-89ff-9fd31cfffa3e_Avail-Landlord-Software-product_landlord-maintanence-tracking_600x800.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                alt="Hero"
                className="w-full h-[70%] object-cover rounded-lg" 
            />
            </div>
        </div>
    </div>

        {/* 2nd Component  */}
        <div className="w-full lg:mt-[0px] lg:mb-[10px] mt-[100px] space-y-10 bg-gray-200">
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
                  className="lg:w-[80%] lg:h-[70%] w-[85%] h-[100%] object-cover rounded-lg"
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

          {/* 3rd Component  */}

          <div className='w-full h-screen lg:mt-[20px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen  pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-center font-semibold leading-tight text-blue-900">
            Maintain your rental property with landlord maintenance software.
            </h1>

            <p className="lg:text-[20px] text-[20px]  text-gray-500 leading-relaxed mt-8">
            Taking care of your rental property doesn’t have to be demanding. When you have a maintenance tracking portal in place, it’s easy to solve property issues quickly.
            </p>

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F1a016db3-6442-4472-bab4-b93b4206aae9_splash_maintenance-landlord_600x600.png%3Fauto%3Dcompress%2Cformat&w=1200&q=75"
                    alt="Hero"
                    className="lg:w-[50%] lg:h-[55%] w-[90%] h-[90%] object-cover rounded-lg" 
                />
            </div>

            </div>
        </div>
    </div>

          {/* 4th Component */}
    
          <div className="w-full lg:h-screen h-[2000px] lg:mt-[10px] mt-[230px] flex flex-col items-center lg:pb-0 pb-[10px] bg-gray-200">
      
      <div className="max-w-[1200px] lg:mx-auto lg:px-[20px] px-[10px] h-full grid lg:grid-cols-3 md:grid-cols-2 items-center">
        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F8ca279b1-4a35-481a-aee9-1ace79918c76_Spot%2BIllustration_Repair%2BProcess.png%3Fauto%3Dcompress%2Cformat&w=384&q=75" alt="Tenant Screening" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Track repair progress
          </h1>
    
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fb00026f0-5757-4c04-a07c-47fab6a8f619_Spot%2BIllustration_Upload%2BPhotos.png%3Fauto%3Dcompress%2Cformat&w=384&q=75" alt="Online Rent Collection" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Upload photos
          </h1>
        
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fb00026f0-5757-4c04-a07c-47fab6a8f619_Spot%2BIllustration_Upload%2BPhotos.png%3Fauto%3Dcompress%2Cformat&w=384&q=75" alt="Lawyer-reviewed lease documents" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Message tenants in-app
          </h1>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F3dba2b9d-5cb1-4f7c-9ec0-1f0f46dbcf9e_Spot%2BIllustration_Contractors.png%3Fauto%3Dcompress%2Cformat&w=384&q=75" alt="Tenant Screening" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
          Share repair progress with tenants
          </h1>
    
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F8fe35683-8369-417c-a1a3-2be53b51f0b7_Spot%2BIllustraton_Maintenance%2BContractors.png%3Fauto%3Dcompress%2Cformat&w=384&q=75" alt="Online Rent Collection" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
          Loop in your own contractors
          </h1>
        
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fcdf1efcc-e1d6-466f-a638-b90bdfc784d8_Spot%2BIllustration_Notes%2Band%2BCosts.png%3Fauto%3Dcompress%2Cformat&w=384&q=75" alt="Lawyer-reviewed lease documents" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
          Keep record of repair notes and costs
          </h1>
        </div>
      </div>
    </div>

    
        <Footer/>
    </div>
  )
}

export default MaintenanceTracking