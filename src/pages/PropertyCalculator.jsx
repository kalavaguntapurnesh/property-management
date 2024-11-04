import React, { Component } from 'react'
import NavBar from '../components/Navbar'
import { Link } from 'react-router-dom'
const PropertyCalculator = () => {
    const sections1 = [
        {
          title: "Track repair progress",
          description:
            "This is the address of the property you're considering buying. We'll use this to geolocate and try automatically pull in some data to make the rest of the calculator easier.",
        },
        {
          title: "Monthly Rent Amount",
          description:
            "The monthly rent amount is the total gross monthly rent for each unit that you expect. When working with an agent or the current owner/landlord directly, this information is commonly stored in a document referred to as the Rent Roll.",
        },
        {
          title: "Asking Price",
          description: "The asking price is the amount the seller is asking for the property. This is not necessarily the final sales price or deal price. This is typically negotiable.",
        },
        {
          title: "Down Payment",
          description: "The down payment is the amount (or percent of the total sales price) that you plan on paying at the time the deal is closed. For most investment properties, especially if you're a first time real estate investor, the mortgage company will require you to put 25% down.",
        },
        {
          title: "Amount Financed",
          description: "The amount financed is the amount (or percent of the total sales price) that you plan on financing at the time the deal is closed. For most investment properties, especially if you're a first time real estate investor, the mortgage company finance a maximum of 75% of the property value.",
        },
        {
          title: "Interest Rate or Mortgage Rate",
          description: "The interest rate is the rate of interest the lender requires on the financing arrangement. An investment property will tend to have a higher interest rate than a primary residence. Market conditions have a huge impact on interest rates. You'll often hear about the Fed increasing or decreasing rates, and these refer to the rates banks charge each other. This can increase or decrease the general market rates. Then, your personal financial history will have an impact, including your credit score and existing debt obligations.",
        },
        {
          title: "Closing Costs",
          description: "Closing costs are the additional expenses outside of the sales price that will occur at time of closing when the property transfers to your ownership. This can include legal fees, transfer stamps/taxes, title fees, etc. Typically, you can expect to pay about 2% of the final price in closing costs.",
        },
        {
          title: "Upfront Enhancements",
          description: "Upfront enhancements are the amounts you expect to pay for immediate repairs or upgrades upon closing the property. This could be things like painting the units or replacing door locks. It can be any amount of money you plan on spending in the first few months of owning the property.",
        },
        {
          title: "Growth Rate",
          description: "The growth rate is the rate at which you plan to increase rents each year and how much you may expect the property to appreciate in value. A conservative estimate is around 2%. This can depend on macroeconomic factors like inflation as well as neighborhood changes.",
        },
        {
          title: "Expense Ratio",
          description: "The expense ratio is the ratio of expenses to total gross rent that you expect to have to cover various expenses of managing the property, including utilities, repairs, insurance, etc. On average, you can expect that about 45% of gross rents will have to go towards these costs. A safe range is between 35% for newer or well maintained properties to 55% for older properties or those with more deferred maintenance.",
        },
        {
          title: "Vacancy and Collectables Expense (V&C)",
          description: "The vacancy and collectables expense is the rate at which you expect to have some units be either vacant or unable to collect rent from a tenant. The lower the rate, the more stable you expect leasing and rent to be.",
        },
      ];
      
      const sections2 = [
        {
          title: "Gross Rent",
          description:
            "Gross rent is the total monthly rent expected from all units within the building.",
        },
        {
          title: "Monthly Income",
          description:
            "The monthly income on the property is the before tax cash flow expected monthly (gross rents minus debt service and expenses).",
        },
        {
            title: "Estimated Cash Required At Closing",
            description:
              "The total estimated cash at closing is how much money you'll likely need to bring to the table at the time of closing. This amount includes the down payment, closing costs, legal costs, and any enhancements you're doing immediately.",
          },
        {
          title: "Capitalization (Cap) Rate",
          description: "The capitalization rate shows the potential rate of return you might expect from the rental property. This is calculated by taking the net operating income (NOI) and dividing into the sales price of the property. Cap rate is the effective ROI for the property if you paid 100% cash for the purchase. Otherwise the IRR is a better metric for measuring the profitability.",
        },
        {
          title: "Cash on Cash Return",
          description: "The cash on cash return is the rate of return you can expect based on the all-in cash cost to purchase the property. This is calculated by taking the after-tax annual cash flow and dividing into the cash paid in to purchase the property.",
        },
        {
          title: "Equity Dividend Ratio",
          description: "The equity dividend ratio is the return on equity you'd expect from the property. It is calculated by dividing the after tax cash flow into the total equity on the property (i.e. down payment amount).",
        },
        {
          title: "Debt Coverage Ratio",
          description: "The debt coverage ratio measures the ability, after expenses, to pay the property's monthly mortgage and debt obligations. It is calculated by dividing Net Operating Income by the monthly Debt Service. Values over 1 suggest there is sufficient coverage and ability to pay the debt.",
        },
        {
          title: "Gross Rent Multiplier",
          description: "The gross rent multiplier (GRM) is the measurement of value of the investment over its total gross rent. It is calculated by dividing the total sales price by the annual gross rent. This can then be compared to other properties in the area, or average GRMs in the area, to get a sense of whether the asking price is relatively expensive.",
        },
        {
          title: "Breakeven Ratio",
          description: "The breakeven ratio is a measurement of how vulnerable the property is to gross rent swings and an assessment of financial leeway you have in lowered rents before the property's rent no longer covers all the expenses. This is calculated by dividing operating expenses and debt payments into the total gross rent. The lower the percentage, the more leeway you have.",
        },
        {
          title: "Internal Rate of Return (IRR)",
          description: "The internal rate of return is the effective and compounded annual rate of return you can expect if you invest in the property. This rate can be compared to other investment opportunities you have to determine if this is your best opportunity.",
        },
        {
          title: "Operating Expenses",
          description: "The operating expenses are the total costs to operate the property on a monthly basis, including things like repairs, maintenance, and insurance. Typically, properties that are newer or have less wear and tear would have an operating expense that's about 35% of the gross rent. For properties that are older or have more deferred maintenance, an expense ratio closer to 55% may be more accurate.",
        }
      ];

  return (
    <div>
        <NavBar/>
        
        {/* 1st Component */}
        <div className='w-full lg:h-screen h-[750px] lg:mt-[150px] mt-[250px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] flex flex-col items-center justify-center h-screen  pb-10">
        <div className=" p-8 flex flex-col items-center justify-center space-y-[30px]">
            <h1 className="lg:text-[50px] text-[40px] font-bold text-center font-semibold leading-tight text-blue-900">
                Rental Property Calculator
            </h1>

            <p className="lg:text-[20px] text-[18px]  text-blue-900 font-semibold leading-relaxed mt-8">
                Calculate the Cap Rate, Cash-on-Cash Return, GRM, and IRR in 5 Minutes
            </p>

            <p className="lg:text-[20px] text-[18px]  text-gray-500 leading-relaxed mt-8">
                Use this online calculator to help you decide if a property you're considering buying makes sense, leveraging the same formulas professionals use.
            </p>

            <div className=''>
                <button className='w-[350px] p-4 bg-blue-900 text-white hover:bg-gray-600 rounded-lg uppercase font-bold'>
                    <Link to="/register">Start Calulator </Link>
                </button>
            </div>

            <div className='shadow-2xl p-4 flex flex-col space-y-2'>
                <h1 className="lg:text-[50px] text-[25px]  text-start font-semibold leading-tight text-blue-700">
                    How does the calculator work?
                </h1>

                <p className="lg:text-[20px] text-[15px]  leading-relaxed mt-8">
                    This calculator will help you determine if the investment property you're looking at is priced correctly and is worth investing in. Plug in the asking price, gross rents, and financing information, and we'll calculate cap rate, cash-on-cash return, gross rent multiplier (GRM), and internal rate of return (IRR) for you. Then, adjust your inputs (including the offer price) as you change your assumptions to see if the property is a worthwhile purchase.
                
                </p>

                <p className="lg:text-[20px] text-[15px]  leading-relaxed mt-8">
                    It's hard to give a specific "buy" or "no buy" recommendation since everyone has different thresholds of risk. However, the outputs of this calculator will give you the information you need to make an educated determination.
                    We've designed this calculator for beginners, so we'll explain everything as we go — including the inputs and outputs.
                </p>
            </div>
            </div>
        </div>
    </div>

   

    {/* // 2nd Component */}

    <div className="w-full lg:h-[2000px] h-[4000px] lg:mt-[10px] mt-[230px] flex flex-col items-center lg:pb-0 pb-[10px] bg-gray-200">
      
    <h1 className="lg:text-[35px] text-[35px] font-bold text-center text-blue-900 mt-8">
      What are the inputs?
    </h1>
    
    <div className="max-w-[1200px] lg:mx-auto lg:px-[20px] px-[10px] h-full grid lg:grid-cols-3 items-center">
      {sections1.map((section, index) => (
        <div key={index} className="p-8 flex flex-col justify-center">
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            {section.title}
          </h1>
          {section.description && (
            <p className="lg:text-[18px] text-[18px] text-start text-gray-500 leading-relaxed mt-8">
              {section.description}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>

      {/* 3rd Component */}

      <div className="w-full lg:h-[2000px] h-[4000px] lg:mt-[10px] mt-[120px] flex flex-col items-center lg:pb-0 pb-[10px] ">
      
      <h1 className="lg:text-[35px] text-[35px] font-bold text-center text-blue-900 mt-8">
        What are the outputs?
      </h1>
      
      <div className="max-w-[1200px] lg:mx-auto lg:px-[20px] px-[10px] h-full grid lg:grid-cols-3 items-center">
        {sections2.map((section, index) => (
          <div key={index} className="p-8 flex flex-col justify-center">
            <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
              {section.title}
            </h1>
            {section.description && (
              <p className="lg:text-[18px] text-[18px] text-start text-gray-500 leading-relaxed mt-8">
                {section.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>


  </div>
  )
}

export default PropertyCalculator