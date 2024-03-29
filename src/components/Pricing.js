import React from 'react'
import Heading from './Heading'
import PricingCard from './PricingCard'
import Animate from '../utils/Animate'

const Pricing = () => {
  return (
    <section className='min-w-full bg-[#FAFAFA] h-[2448px] lg:h-[1116px] top-[5049px] md:top-[5037px] lg:top-[2604px]' id='pricing'>
      <Animate>
        <div className='flex flex-col items-center min-w-full pt-[45px] pb-[45px] gap-[60px]'>
            <Heading title='Pricing'/>
            <div className='flex flex-col lg:flex-row items-end gap-[30px] lg:gap-0'>
                <PricingCard theme='light' title='FREE' price='0'/>
                <PricingCard theme='dark' title='STANDARD' price='9.99'/>
                <PricingCard theme='light' title='PREMIUM' price='19.99'/>
            </div>
        </div>
        </Animate>
    </section>
  )
}

export default Pricing
