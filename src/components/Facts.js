import React from 'react'
import FactCard from './FactCard'
import Heading from './Heading'

const Facts = () => {
  return (
    <section className='absolute h-[1349px] bg-[#FAFAFA] min-w-full top-[4038px] md:top-[2025px]'>
        <div className='flex flex-col items-center absolute min-w-full pt-[100px] pb-[100px] gap-[30px]'>
            <Heading title='FAQ'/>
            <div className='flex flex-col gap-[30px] items-center md:grid md:grid-cols-3'>
                <FactCard/>
                <FactCard/>
                <FactCard/>
                <FactCard/>
                <FactCard/>
                <FactCard/>
            </div>
        </div>
      
    </section>
  )
}

export default Facts
