import React from 'react'
import Accordion from "../components/Accordion";
const FAQ = () => {
  return (
    <div className="w-full min-h-screen lg:mt-[20px] mt-[100px] flex flex-col items-center lg:pb-0 pb-[10px]">
        <div className="max-w-[1200px] lg:mx-auto mx-[20px] text-center">
            <div className="pt-12 pb-12" id="faq">
                <div className="space-y-2">
                  <div className="lg:text-[50px] text-[30px] font-bold text-blue-900 text-center">
                    <h1>Rental Application FAQs</h1>
                  </div>
                </div>

                <div className="max-w-[1000px] mx-auto pt-12 ">
                  <Accordion
                    title="What information is gathered in an online rental application?"
                    answer="Our online rental application forms request the following information from prospective tenants:
                          Their personal and contact information

                          If they own pets

                          Five to 10 years of work history

                          Income verification documents (i.e., W2 forms, paystubs)

                          Standard questions on smoking, declaring for bankruptcy, previous convictions, evictions, and refusal to pay rent

                          With Unlimited Plus, you can also add five custom questions as well as tenant screening reports to ensure you have all the information you need to make a decision."
                  />
                  <Accordion
                    title="Can you edit the settings on an Rentals. online rental application?"
                    answer="Yes, you can change the default settings of Rentals. rental applications to suit your needs. Examples include requiring one to 10 years of residence history, one to 10 years of work history, income verification, our standard questions, and adding tenant screening reports."
                  />
                  <Accordion
                    title="Does Rentals. conduct automated landlord reference checks?"
                    answer="Yes. When prospective tenants submit their previous landlords' contact information, our system automatically performs landlord reference checks to gather information on their renting experience with them. If we cannot contact their previous landlords due to their policies, you can still reach out to them directly with the provided contact information."
                  />
                  <Accordion
                    title="Do landlords or tenants have to cover the application fee?"
                    answer="There are no fees for rental applications, only the screening reports that can be added to the application. Landlords can choose to pay the application fee or have the prospective tenant cover the fee."
                  />
                  <Accordion
                    title="Can I request the rental application without tenant screening reports?"
                    answer="Yes, you can request a rental application without tenant screening reports."
                  />
                  <Accordion
                    title="What tenant screening reports can I add to a rental application?"
                    answer="You can add a TransUnion credit report, a criminal background check, and an eviction history report to an Avail rental application. If you prefer to purchase one or two screening reports to abide by local landlord-tenant laws, you have the option to request separate reports as well."
                  />
                </div>
              </div>
            </div>
        </div>
  )
}

export default FAQ