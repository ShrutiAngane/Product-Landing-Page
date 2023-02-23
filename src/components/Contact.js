import React from 'react'

const Contact = () => {
  return (
    <section className='absolute top-[7450px] md:top-[3640px] md:h-[257px] min-w-full h-[332px] bg-[#252B42] flex items-center justify-center'>
        <div className='flex flex-col items-center pt-[60px] pb-[60px] absolute gap-[30px] md:hidden'>
            <h3 className='font-bold text-[24px] text-center text-[#FFFFFF] w-[258px]'>Subscribe For Latest Newsletter</h3>
            <div className='flex w-[337px] h-[58px]'>
            <input type='email' placeholder='Your Email' className=' text-[#737373] p-[15px] text-[14px] w-[220px] bg-[#F9F9F9] border rounded-l-lg focus:outline-none'></input>
            <button className=' bg-[#23A6F0] border border-[#E6E6E6] w-[117px] rounded-r-lg text-center text-[#FFFFFF]'>Subscribe</button>
            </div>
        </div>
        <div className='md:flex md:items-center md:gap-[225px] max-[768px]:hidden'>
            <div className='w-[439px] flex flex-col items-start'>
            <h2 className='font-bold text-[40px] text-[#FFFFFF] w-full'>Get In Touch</h2>
            <p className='text-[14px] text-[#FFFFFF] font-normal'>The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th </p>
            </div>
            <div className='flex w-[386px] h-[58px]'>
            <input type='email' placeholder='Your Email' className=' text-[#737373] p-[15px] text-[14px] w-[269px] bg-[#F9F9F9] border rounded-l-lg focus:outline-none'></input>
            <button className=' bg-[#23A6F0] border border-[#E6E6E6] w-[117px] rounded-r-lg text-center text-[#FFFFFF]'>Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default Contact
