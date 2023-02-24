import React from 'react'
import Heading from './Heading'
import PricingCard from './PricingCard'

const Pricing = () => {
  return (
    <section className='absolute min-w-full bg-[#FAFAFA] h-[2448px] lg:h-[1116px] top-[5049px] lg:top-[2604px]' id='pricing'>
        <div className='absolute flex flex-col items-center min-w-full pt-[45px] pb-[45px] gap-[60px]'>
            <Heading title='Pricing'/>
            <div className='flex flex-col lg:flex-row items-end gap-[30px] lg:gap-0'>
                <PricingCard theme='light' title='FREE' price='0'/>
                <PricingCard theme='dark' title='STANDARD' price='9.99'/>
                <PricingCard theme='light' title='PREMIUM' price='19.99'/>
            </div>
        </div>
    </section>
  )
}

export default Pricing
