import React from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import FooterCard from './FooterCard'

const Footer = () => {
  return (
    <section className='absolute h-[1005px] top-[7780px] md:top-[3907px] md:h-[414px] bg-[#FAFAFA] flex flex-col items-center justify-center min-w-full gap-[40px]'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-[30px] md:h-[205px]'>
            <div className='flex flex-col items-start gap-[25px] md:w-[238px]'>
                <h3 className='text-[#252B42] text-[24px] font-bold'>Get In Touch</h3>
                <p className='text-[#737373] text-[14px] font-normal'>the quick fox jumps over the lazy dog</p>
                <div className='flex items-center justify-center gap-[20px] w-[112px] h-[24px]'>
                    <div className='w-[24px] h-[24px] hover:cursor-pointer'><img src={facebook} alt='Facebook' className='absolute w-[24px] h-[24px]'></img></div>
                    <div className='w-[24px] h-[24px] hover:cursor-pointer'><img src={instagram} alt='Instagram' className='absolute w-[24px] h-[24px]'></img></div>
                    <div className='w-[24px] h-[24px] hover:cursor-pointer'><img src={twitter} alt='Twitter' className='absolute w-[24px] h-[24px]'></img></div>
                </div>
            </div>
            <FooterCard title='Company Info' link1='About Us' link2='Career' link3='We are hiring' link4='Blog'/>
            <FooterCard title='Features' link1='Business Marketing' link2='User Analytic' link3='Live Chat' link4='Unlimited Support'/>
            <FooterCard title='Resources' link1='ioS & Android' link2='Watch a Demo' link3='Customers' link4='API'/>
        </div>
        <div className='bg-[#FAFAFA] flex items-center justify-center min-w-full md:h-[74px]'>
            <h4 className='text-[#737373] font-semibold text-[14px] text-center w-[221px] md:w-[368px]'>Made With Love By Figmaland All Right Reserved </h4>
        </div>
    </section>
  )
}

export default Footer
