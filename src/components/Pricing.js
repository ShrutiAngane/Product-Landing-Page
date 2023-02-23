import React from 'react'
import Heading from './Heading'
import PricingCard from './PricingCard'

const Pricing = () => {
  return (
    <section className='absolute min-w-full bg-[#FAFAFA] h-[2448px] md:h-[1116px] top-[5049px] md:top-[2604px]'>
        <div className='absolute flex flex-col items-center min-w-full pt-[45px] pb-[45px] gap-[60px]'>
            <Heading title='Pricing'/>
            <div className='flex flex-col md:flex-row items-end gap-[30px] md:gap-0'>
                <PricingCard theme='light' title='FREE' price='0'/>
                <PricingCard theme='dark' title='STANDARD' price='9.99'/>
                <PricingCard theme='light' title='PREMIUM' price='19.99'/>
            </div>
        </div>
    </section>
  )
}

export default Pricing
