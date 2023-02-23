import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className='flex items-center p-[30px] bg-[#FFFFFF] border-2 border-[#DEDEDE] rounded-lg w-[327px] xl:w-[327px] lg:w-[250px] h-[244px]'>
        <section className='flex flex-col items-start gap-[20px]'>
            <div className='flex items-start gap-[5px]'>
                <img src={props.image} alt='review'></img>
                <img src={props.image} alt='review'></img>
                <img src={props.image} alt='review'></img>
                <img src={props.image} alt='review'></img>
                <img src={props.image} alt='review'></img>
            </div>
            <h6 className='font-semibold text-[14px] text-[#737373]'>Slate helps you see how many more days you need to work to reach your financial goal.</h6>
            <div className='w-[50px] h-[50px] rounded-full border-2 border-[#BDBDBD]'><img src={props.user} alt='user'></img></div>
        </section>
      
    </div>
  )
}

export default TestimonialCard
