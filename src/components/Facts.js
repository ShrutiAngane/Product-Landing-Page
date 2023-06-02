import React from 'react'
import FactCard from './FactCard'
import Heading from './Heading'
import Animate from '../utils/Animate'

const Facts = () => {
  return (
    <section className='flex bg-[#FAFAFA] min-w-full top-[4038px] md:top-[3688px] lg:top-[2025px]'>
      <Animate>
        <div className='flex flex-col items-center min-w-full pt-[100px] pb-[100px] gap-[30px]'>
            <Heading title='FAQ'/>
            <div className='flex flex-col gap-[30px] items-center lg:grid lg:grid-cols-3'>
                <FactCard/>
                <FactCard/>
                <FactCard/>
                <FactCard/>
                <FactCard/>
                <FactCard/>
            </div>
        </div>
        </Animate>  
    </section>
  )
}

export default Facts
