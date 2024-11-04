import React from 'react'
import Accordion from "../components/Accordion";
const CreditAndBackgroundCheckFAQs = () => {
    return (
        <div className="w-full lg:h-[600px] lg:mt-[20px] mt-[100px] flex flex-col items-center lg:pb-0 pb-[10px]">
            <div className="max-w-[1200px] lg:mx-auto mx-[20px] text-center">
                <div className="pt-12 pb-12" id="faq">
                    <div className="space-y-2">
                      <div className="lg:text-[50px] text-[30px] font-bold text-blue-900 text-center">
                        <h1>Credit and Background Check FAQs</h1>
                      </div>
                    </div>
    
                    <div className="max-w-[1000px] mx-auto pt-12 ">
                      <Accordion
                        title="What information is included in Rentals. credit, background, and eviction reports?"
                        answer="With Rentals., landlords can request a TransUnion-backed credit report, criminal history check, and nationwide eviction report.
                            A tenant credit report includes the following:
                            TransUnion credit score
                            Credit insights
                            Account summaries
                            Tradelines
                            If applicable, criminal history check includes information from:
                            Federal watch lists
                            State reports
                            National Sex Offender Registry
                            Office of Foreign Asset Control (OFAC) watchlists
                            A tenant eviction report includes:
                            History across all 50 states
                            Offender name
                            Eviction summary judgment
                            Eviction date"                     
                        />
                      <Accordion
                        title="How long do credit and background checks take to complete?"
                        answer="The time it takes to complete a credit and background check depends on how fast an applicant provides authorization. When you request a tenant background check through Rentals., we'll immediately contact your applicant to authorize it. Once they do this, you'll receive the reports immediately to analyze the results from your landlord profile."
                      />
                      <Accordion
                        title="How much do Rentals. credit and background checks cost?"
                        answer="Due to state-specific landlord-tenant laws, screening report costs vary based on location. From your landlord dashboard, you can select individual reports or bundle all three. The system will display the total cost and you or the applicant can pay the fee with a debit or credit card."
                      />
                      <Accordion
                        title="Can I run a credit check if my tenant doesn't have a Social Security number?"
                        answer="Without a valid US Social Security number (SSN) or individual taxpayer identification number (ITIN), applicants cannot authorize a credit check. However, there are additional ways to screen tenants without an SSN or ITIN, such as requesting credit references or bank statements."
                      />
                    </div>
                  </div>
                </div>
            </div>
      )
}

export default CreditAndBackgroundCheckFAQs