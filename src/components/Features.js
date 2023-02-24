import React from 'react'
import Card from './Card'
import Heading from './Heading'

const Features = () => {
  return (
    <section className='lg:h-[828px] h-[1646px] min-w-full bg-[#FFFFFF] flex justify-center items-center absolute lg:top-[817px] top-[1269px]' id='features'>
        <div className='absolute max-w-full lg:w-[1050px] lg:h-[828px] flex flex-col gap-[112px] items-center justify-center max-[480px]:top-0 max-[480px]:p-[30px]'>
            <Heading title='Leading Medicine'/>
            <div className='flex flex-col lg:flex-row items-center gap-[30px] w-100%'>
                <Card heading='Emergency Case'/>
                <Card heading='Cancer Care'/>
                <Card heading='Health Queries'/>

            </div>

        </div>
      
    </section>
  )
}

export default Features
