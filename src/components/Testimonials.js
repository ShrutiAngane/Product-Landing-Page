import React from 'react'
import Heading from './Heading'
import TestimonialCard from './TestimonialCard'
import star from '../assets/stars.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'

const Testimonials = () => {
  return (
    <section className=' bg-[#FAFAFA] lg:h-[450px] top-[2915px] md:top-[2463px] lg:top-[1600px] flex justify-center min-w-full'>
        <div className='flex flex-col items-center pt-[45px] pb-[45px] pl-[30px] pr-[30px] lg:p-0 h-[1146px] max-w-[100%] gap-[60px]'>
            <Heading title='What Clients Say'/>
            <div className='flex flex-col lg:flex-row max-[480px]:items-center gap-[30px] h-[792px]'>
                <TestimonialCard image={star} user={user1}/>
                <TestimonialCard image={star} user={user2}/>
                <TestimonialCard image={star} user={user3}/>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
