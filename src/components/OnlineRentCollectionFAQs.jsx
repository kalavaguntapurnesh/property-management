import React from 'react'
import Accordion from './Accordion'
const OnlineRentCollectionFAQs = () => {
  return (
    <div className="w-full lg:h-screen lg:mt-[20px] mt-[100px] flex flex-col items-center lg:pb-0 pb-[10px]">
    <div className="max-w-[1200px] lg:mx-auto mx-[20px] text-center">
        <div className="pt-12 pb-12" id="faq">
            <div className="space-y-2">
              <div className="lg:text-[50px] text-[30px] font-bold text-blue-900 text-center">
                <h1>Rent Collection FAQs</h1>
              </div>
            </div>

            <div className="max-w-[1000px] mx-auto pt-12 ">
              <Accordion
                title="What type of payments can I collect using Avail?"
                answer="You can collect credit card payments, debit card payments, and ACH payments — whichever your tenant chooses to pay rent with."                     
                />
              <Accordion
                title="How do I accept ACH payments for a rental property?"
                answer="After setting up your rental property and choosing your subscription, click the Payments tab to enter your tenant's email address. We will then email them instructions on how to set up ACH payments, CreditBoost, and Autopay. You can then receive ACH payments from tenants once they've set up their accounts."
              />
              <Accordion
                title="How much much does it cost to collect rent using Avail?"
                answer="Landlords pay no fees to collect rent using Avail. The tenant pays the fees depending on the type of payment. If a landlord is on the Unlimited subscription, tenants must pay $2.50 per payment. However, ACH fees are waived for landlords with Unlimited Plus. Payments made with a credit or debit card require a 3.5% convenience fee. Learn more on our Pricing page."
              />
              <Accordion
                title="Does Avail provide landlords with 1099 forms?"
                answer="Yes, in compliance with federal regulations, landlords must submit their tax information to collect payments through Avail. This is to comply with the IRS 1099-K requirements and ensure you're issued a 1099-K form. Visit our 1099 frequently asked questions page for more information."
              />
               <Accordion
                title="How long can it take for payments to be deposited into my account?"
                answer="Payments submitted through Avail can take three to five business days to show in your account. However, you can upgrade to Unlimited Plus to access FastPay, which deposits funds as soon as the next business day."
              />
               <Accordion
                title="Can tenants report rent payments to credit bureaus?"
                answer="Yes, Avail allows tenants to report on-time rent payments to TransUnion through CreditBoost. For $3.95/per reported month, tenants can turn on CreditBoost when submitting their payment to have it go towards their FICO 9, FICO XD, and VantageScore credit scores. They can also report up to 24 months of rent to get credit for their previous payments."
              />
               <Accordion
                title="Can I track how much rental income I've collected for my rentals?"
                answer="Yes, payments collected through Avail will automatically populate on the Rental Property Accounting dashboard with information on the payer, the amount, the date, and what property it was for. You can sort through types of transactions, property, and more."
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default OnlineRentCollectionFAQs