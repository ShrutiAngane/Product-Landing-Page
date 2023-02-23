import React from 'react'
import { Link } from 'react-router-dom'
import {features} from '../constants/features'
import icon from '../assets/features-icon.svg'

const Card = (props) => {
  return (
    <div className='flex flex-col w-[328px] items-center bg-[#D9EDFF] rounded-xl'>
        <div className='flex items-center gap-[15px] bg-[#8EC2F2] p-[30px] h-[132px] w-[100%] rounded-lg'>
            <div className='bg-[#FFFFFF] rounded-full w-[72px] h-[72px]'><img src={icon} alt='people' className='p-[22px] absolute'></img></div>
            <h5 className='text-[#FFFFFF] text-[16px] font-bold'>{props.heading}</h5>
        </div>
        <div className='bg-[#FFFFFF] flex flex-col p-[30px] h-[253px] border-2 border-[#A9D6FF] rounded-lg gap-[5px] w-[100%]'>
            {features.map((element,index)=>{
                return <h6 key={index} className='text-[#737373] text-[14px] font-semibold h-[24px]'>{element.text}</h6>  
            })}
            <Link to='#' className='text-[#23A6F0] text-[14px] font-semibold'>Learn More</Link>

        </div>
      
    </div>
  )
}

export default Card
