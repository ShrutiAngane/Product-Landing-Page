import React from 'react'

const Heading = (props) => {
  return (
    <div className='flex flex-col items-center md:h-[107px] w-[100%] md:w-[676px] gap-[10px]'>
                <h2 className='text-[#252B42] font-bold text-[40px] text-center w-[300px] md:w-full'>{props.title}</h2>
                <p className='text-[#737373] text-[14px] text-center w-[225px] md:w-[470px] font-medium'>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
  )
}

export default Heading
