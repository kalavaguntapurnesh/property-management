import React from 'react'
import NavBar from '../components/Navbar'
import OnlineRentCollectionFAQs from '../components/OnlineRentCollectionFAQs'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const OnlineRentCollection = () => {
    const content = [
        {
          title: "Charge late fees in minutes",
          description1: "Set up automated late fees for renters who are officially past due on rent.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2FZs8_vkaF0TcGJe0k_Avail-late-fees-feature.png%3Fauto%3Dformat%2Ccompress&w=960&q=75",
        },
        {
          title: "Renter-friendly features",
          description1: "Avail offers features that encourage on-time rent payments and make it easy to pay rent online. Renters can schedule payments, report on-time payments to build their credit with CreditBoost, and split payments with roommates.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2FZs8_vkaF0TcGJe0k_Avail-late-fees-feature.png%3Fauto%3Dformat%2Ccompress&w=960&q=75",
        },
        {
          title: "Get rent payments sooner with FastPay",
          description1: "Online rent payments are transferred to your account within three business days or as soon as the next day with FastPay. Accept payments made with a debit card, credit card, or bank account.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F6664a131-2129-4ada-95ec-57d30cb0df5f_Screenshot_Product_Fast%2BPay%2BTimeline.png%3Fauto%3Dformat%2Ccompress&w=960&q=75",
        }
      ];

      const features = [
        {
          title: "Join Rentals.:",
          description: "Create a landlord account to utilize Rentals. rent collection features designed to take the stress out of getting paid. Choose between our Unlimited or Unlimited Plus plans."
        },
        {
          title: "Connect your bank account:",
          description: "Add your banking information through our trusted partner, Plaid.."
        },
        {
          title: "Create a payment list:",
          description: "Schedule rent payments, deposits, and fees for each tenant with the cost amount and the tenant's information."
        },
        {
          title: "Update payment settings: ",
          description: "Customize when to charge late fees, send rent reminders, and receive payment confirmations."
        },
        {
          title: "Get paid:",
          description: "Payments will be deposited to your account."
        }
      ];

  return (
    <div>
        <NavBar/>
        
        {/* 1st Component  */}

        <div className='w-full h-screen lg:mt-[80px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

    <div className=" p-8 flex flex-col justify-center ">
      <h1 className="lg:text-[45px] text-[32px] font-bold text-start font-semibold leading-tight text-blue-900">
        Collect rent payments online with ease.
      </h1>

      <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
        Take the stress out of online rent collection. Collect rent payments, security deposits, move-in fees, and more in one platform.
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
        src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F3cefa670-665a-4c60-a238-fd660fdd6b19_Avail-Landlord-Software-product_landlord-online-rent-collection_600x800.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
        alt="Hero"
        className="w-full h-[70%] object-cover rounded-lg" 
    />
    </div>
    </div>
    </div>

        {/* 2nd Component */}

        <div className="w-full lg:h-screen h-[900px] lg:mt-[10px] mt-[100px] flex flex-col items-center lg:pb-0  bg-gray-200">
    <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center mt-[100px]">
      <h1 className="lg:text-[47px] text-[30px] font-bold text-blue-900 text-start leading-tight">
      Rentals. makes collecting rent online a streamlined process for both landlords and their tenants.
      </h1>
    </div>

    <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center">      
      <div className="p-2 flex flex-col justify-center">
        <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight">
        Request payments and rental fees
        </h1>
        <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
        Easily create payment lists for rent payments, fees, and deposits from one or multiple renters through Avail rent collection. Track payments to stay informed on processed and unpaid payments.
        </p>
      </div>

      <div className="flex justify-center">
        <img src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F883e03f2-151c-4b3e-83e9-176357439cb0_Screenshot%2BProduct%2BExample_Request%2BPayment.png%3Fauto%3Dcompress%2Cformat&w=960&q=75" className="w-full h-auto lg:w-[500px]" alt="Rental Listing" />
      </div>
      
    </div>
  </div>

        {/* 3rd Component */}

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
                  className="lg:w-[80%] lg:h-[82%] w-[85%] h-[100%] object-cover rounded-lg"
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

            {/* 4th Component */}

            <div className='w-full lg:h-[900px] h-[1250px] lg:mt-[10px] mt-[100px]'>
          <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
            {/* left Grid - Content Section */}
            <div className="p-8 flex flex-col justify-start space-y-6 lg:mt-[100px] mt-0">  
                <p className="lg:text-[50px] text-[32px] font-bold text-start font-semibold leading-tight text-blue-900 space-y-10">
                    How to set up Rentals. rent collection
                </p>
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
               {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
              <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2FZs9D-0aF0TcGJe6K_steps-to-set-up-avail-rent-collection.png%3Fauto%3Dformat%2Ccompress&w=1200&q=75"
                alt="Hero"
                className="w-full h-auto max-h-[80%] object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>   

          </div>
        </div>


        <OnlineRentCollectionFAQs/>
        
        {/* 7th Component of Rental Listing */}

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


        <Footer/>
    </div>
  )
}

export default OnlineRentCollection