import React from 'react'
import Card from './Card'
import Heading from './Heading'
import Animate from '../utils/Animate'

const Features = () => {
  return (
    <section className='lg:h-[828px] h-[1646px] min-w-full bg-[#FFFFFF] flex justify-center items-center mt-[20px]' id='features'>
      <Animate>
          <div className='w-[100%] lg:h-[828px] flex flex-col gap-[112px] items-center justify-center max-[480px]:top-0 max-[480px]:p-[30px]'>
              <Heading title='Leading Medicine'/>
              <div className='flex flex-col lg:flex-row items-center justify-center gap-[30px] w-100%'>
                  <Card heading='Emergency Case'/>
                  <Card heading='Cancer Care'/>
                  <Card heading='Health Queries'/>
              </div>
          </div>
        </Animate>
    </section>
  )
}

export default Features
