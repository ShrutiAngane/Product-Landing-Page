import React from 'react'
import { Link } from 'react-router-dom'

const FooterCard = (props) => {
  return (
    <div className='flex flex-col items-start gap-[20px] h-[178px] md:w-[238px]'>
        <h3 className='text-[#252B42] text-[24px] font-bold'>{props.title}</h3>
        <div className='flex flex-col items-start gap-[10px]'>
            <Link to='#' className='text-[#737373] text-[14px] font-semibold'>{props.link1}</Link>
            <Link to='#' className='text-[#737373] text-[14px] font-semibold'>{props.link2}</Link>
            <Link to='#' className='text-[#737373] text-[14px] font-semibold'>{props.link3}</Link>
            <Link to='#' className='text-[#737373] text-[14px] font-semibold'>{props.link4}</Link>
        </div>
    </div>
  )
}

export default FooterCard
