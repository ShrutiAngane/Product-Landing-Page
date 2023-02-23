import React from 'react'
import arrow from '../assets/arrow.png'

const FactCard = () => {
  return (
    <div className='flex items-start p-[25px] gap-[20px]'>
        <img src={arrow} alt='greater than' className='w-[12px] h-[20px]'></img>
        <div className='flex flex-col gap-[5px] items-start w-[226px]'>
            <h5 className='text-[#252B42] text-[16px] font-bold'>the quick fox jumps over the lazy dog</h5>
            <h6 className='text-[#737373] text-[14px] font-semibold'>Things on a very small scale ...</h6>
        </div>
      
    </div>
  )
}

export default FactCard
