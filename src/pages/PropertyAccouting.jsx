import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const PropertyAccouting = () => {

    const content = [
        {
          title: "Prepare for tax season.",
          description1: "Track your property accounting according to the IRS with categories and transaction types. Your transactions can be viewed through your dashboard or exported into a spreadsheet to share with tax professionals. The spreadsheet can be filtered by the rental property, transaction type, vendor or payer, and more.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F462dd3b7-39ac-4436-91df-9c715695dbe5_Screenshot%2BProduct%2BCSV-illustrationg.png%3Fauto%3Dcompress%2Cformat&w=960&q=75",
        },
        {
          title: "Track the performance of your rentals.",
          description1: "It’s now easier than ever to see if you’re paying more in expenses than what you’re generating in rent payments. Analyze the performance of each rental easier based on money coming in and money coming out.",
          image: "https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F3804e60e-4012-4638-8379-44fa0ccb6aeb_Screenshot_Product_expense_detail.png%3Fauto%3Dcompress%2Cformat&w=960&q=75",
        }
      ];


      const features = [
        {
          title: "Sync Rent Payments and Logged Maintenance Costs",
          description: "Automatically syncs collected payments, maintenance costs, and other transactions without manual input."
        },
        {
          title: "Download Your Property Accounting Tracker",
          description: "Export your transactions as many times as you need, into a customizable spreadsheet that outlines the income and expenses for each rental property. You can also sort by specific transactions, payer, or amount."
        },
        {
          title: "Transaction Information",
          description: "Get an overview of each transaction, such as what unit the payment is for, the date, type of transaction, category, payer, and the amount. You can also upload receipts or invoices to transactions for future reference."
        },
        {
          title: "Manage Your Transactions",
          description: "Delete or edit each log to keep your transactions up to date."
        }
      ];
    

  return (
    <div>
        <NavBar/>

        {/* 1st Component */}

        <div className='w-full h-screen lg:mt-[30px] mt-[100px]'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[50px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Property management accounting software that makes book keeping easy.
                </h1>

                <p className="lg:text-[22px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    Handle your property accounting in the same platform used to manage your rentals.
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
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F076b3cc6-6ced-47f7-832b-e85a4a1b444f_Avail-Landlord-Software-product_landlord-accounting-i_e_600x800.png%3Fauto%3Dcompress%2Cformat&w=1440&q=75"
                    alt="Hero"
                    className="w-full h-[70%] object-cover rounded-lg" 
                />
            </div>
        </div>
    </div>

        {/* 2nd Component  */}

    <div className='w-full lg:h-screen h-[850px] lg:mt-[10px] mt-[100px] bg-gray-200'>
            <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                Our property management software for accounting can help you accurately track your finances.
                </h1>
                <p className="lg:text-[15px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                View the income your rental properties generate and operating expenses that accumulate over time. 
                Our system will automatically populate payments and maintenance expenses logged through Avail to your dashboard.
                </p>
                
            </div>

            
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fe08e1d7a-0212-47a8-aaa6-49dcc440ef62_ProductScreenshot%2B-%2BIncome%2Band%2BExpense%2Blaptop600px.png%3Fauto%3Dcompress%2Cformat&w=1200&q=75"
                    alt="Hero"
                    className="lg:w-full lg:h-[50%] w-[90%] h-[100%] object-cover rounded-lg" 
                />
            </div>
        
        </div>
    </div>

        {/* 3rd Component */}

        <div className="w-full lg:h-screen h-[900px] lg:mt-[10px] mt-[100px] flex flex-col items-center lg:pb-0  ">
    <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center mt-[100px]">
      <h1 className="lg:text-[47px] text-[30px] font-bold text-blue-900 text-start leading-tight">
            Easily track property accounting for more than one property with the Avail Rental Property Accounting tool.
      </h1>
    </div>

    <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center">      
      <div className="p-2 flex flex-col justify-center">
        <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight">
            Increase visibility into all property-related transactions
        </h1>
        <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
            Existing payments, maintenance costs, and other transactions logged through Avail will automatically sync to your dashboard. Add one-time transactions collected outside of Avail or edit transactions to keep your income and expense tracking up to date.
        </p>
      </div>

      <div className="flex justify-center">
        <img src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2F390b0c9f-c126-4861-8be0-3f1f5d915338_Screenshot_Product_I%2526E.png%3Fauto%3Dcompress%2Cformat&w=960&q=75" className="w-full h-auto lg:w-[500px]" alt="Rental Listing" />
      </div>
      
    </div>
  </div>

        {/* 4th Component */}

        <div className="w-full lg:mt-[0px] lg:mb-[10px] mt-[100px] space-y-10 ">
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

          {/* 5th Component */}

          <div className="w-full lg:h-[1000px] h-[1450px] lg:mt-[100px] mt-[100px] flex flex-col items-center lg:pb-0 ">
    <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center">
      <h1 className="lg:text-[47px] text-[30px] font-bold text-blue-900 text-start lg:ml-[0px] ml-[50px] leading-tight">
        Rental Property Management Accounting Software Tracker
      </h1>
      <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed lg:ml-[0px] ml-[50px] mt-8">
        Our easy-to-read rental property income and expense tracker outlines the date, type, category, payer, and total amount of all your transactions.
      </p>
    </div>

    <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
                 {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
              <img
                src="https://www.avail.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Favail-marketing-core%2Fd6a245ba-dcdd-4d30-a2e5-a387eeeb3dc6_Screenshot-Avail-Product-Income-and-expense-tracking.png%3Fauto%3Dcompress%2Cformat&w=1200&q=75"
                alt="Hero"
                className="w-full h-auto max-h-[80%] object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>  

            {/* Right Grid - Content Section */}
            <div className="p-8 flex flex-col justify-start space-y-6 lg:mt-[50px] mt-0 ">
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

export default PropertyAccouting