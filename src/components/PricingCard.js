import React from 'react'
import check from '../assets/check.png'
import disable from '../assets/disable check.png'

const PricingCard = (props) => {
  return (
    <div className={`flex flex-col items-center w-[327px] ${props.theme} gap-[35px] pt-[50px] pb-[50px] pl-[40px] pr-[40px] rounded-lg`}>
      <h3 className={`text-[24px] font-bold text-${props.theme} text-center`}>{props.title}</h3>
      <h5 className='text-[16px] font-bold text-center text-[#737373] w-[160px]'>Organize across all apps by hand</h5>
      <div className='flex items-center gap-[10px]'>
        <h2 className='text-[#23A6F0] text-[40px] font-bold'>{props.price}</h2>
        <div className='flex flex-col items-start w-[78px]'>
            <h3 className='text-[#23A6F0] text-[16px] font-bold w-[11px]'>$</h3>
            <h5 className='text-[#8EC2F2] text-[14px] font-semibold w-[78px]'>Per Month</h5>
        </div>
      </div>
      <div className='flex flex-col items-start gap-[15px] w-[247px]'>
        <div className='flex items-center gap-[10px] w-full'>
            <div className='w-[32px] h-[32px] rounded-full bg-[#2DC071] p-[7px]'><img src={check} alt='checked' className='absolute w-[16px] h-[11px]'></img></div>
            <h6 className={`text-[14px] text-${props.theme} font-semibold w-[205px]`}>Unlimited product updates</h6>
        </div>
        <div className='flex items-center gap-[10px] w-full'>
            <div className='w-[32px] h-[32px] rounded-full bg-[#2DC071] p-[7px]'><img src={check} alt='checked' className='absolute w-[16px] h-[11px]'></img></div>
            <h6 className={`text-[14px] text-${props.theme} font-semibold w-[205px]`}>Unlimited product updates</h6>
        </div>
        <div className='flex items-center gap-[10px] w-full'>
            <div className='w-[32px] h-[32px] rounded-full bg-[#2DC071] p-[7px]'><img src={check} alt='checked' className='absolute w-[16px] h-[11px]'></img></div>
            <h6 className={`text-[14px] text-${props.theme} font-semibold w-[205px]`}>Unlimited product updates</h6>
        </div>
        <div className='flex items-center gap-[10px] w-full'>
            <div className='w-[32px] h-[32px] rounded-full bg-[#BDBDBD] p-[7px]'><img src={disable} alt='checked' className='absolute w-[16px] h-[11px]'></img></div>
            <h6 className={`text-[14px] text-${props.theme} font-semibold w-[205px]`}>1GB  Cloud storage</h6>
        </div>
        <div className='flex items-center gap-[10px] w-full'>
            <div className='w-[32px] h-[32px] rounded-full bg-[#BDBDBD] p-[7px]'><img src={disable} alt='checked' className='absolute w-[16px] h-[11px]'></img></div>
            <h6 className={`text-[14px] text-${props.theme} font-semibold w-[205px]`}>Email and community support</h6>
        </div>
      </div>
      <button className='bg-[#23A6F0] w-[246px] h-[52px] text-center text-[#FFFFFF] text-[14px] font-bold rounded-lg'>Try For Free</button>
    </div>
  )
}

export default PricingCard
