import React from 'react'
// import { Route, Router } from 'react-router-dom';
import Navbar from './Navbar';
const Home = () => {
  return (
    <div className='flex relative min-w-full'>
      <div>
        <div className='w-[100%] absolute matrix h-[1269px] md:h-[817px] bg-no-repeat bg-cover' style={{backgroundImage:"url('coverimage.jpg')"}}></div>
        <div className='overLay md:h-[817px] h-[1269px] absolute w-[100%]'></div>
      </div>
      <section className='flex justify-center absolute min-w-full md:h-[817px] h-[1269px]'>
        <Navbar/>
        <div className='flex flex-col md:flex-row absolute min-[1400px]:pt-[50px] min-[1400px]:pb-[50px] gap-[80px] md:gap-0 top-[100px] h-[710px] min-[1400px]:gap-[120px] md:items-center'>
          <section className='flex flex-col gap-[35px] md:h-[342px] min-[1400px]:w-[599px] md:w-[399px] max-[768px]:items-center'>
              <h1 className='min-[1400px]:text-[58px] md:text-[48px] text-[40px] text-[#ffff] font-extrabold md:w-[509px]'>Meet the Best</h1>
              <h1 className='min-[1400px]:text-[58px] md:text-[48px] text-[40px] text-[#ffff] font-extrabold md:-mt-[46px] -mt-[38px]'>Hospital</h1>
              <h4 className='min-[1400px]:text-[20px] md:text-[18px] text-[20px] text-[#ffff] font-medium md:w-[376px] w-[256px] max-[768px]:text-center md:h-[60px]'>We know how large objects will act, 
  but things on a small scale.</h4>
  <div className='flex flex-col md:flex-row gap-[10px]'>
      <button className='w-[185px] h-[52px] rounded-3xl bg-[#23A6F0] text-[#fff] text-center hover:bg-transparent hover:border-2 hover:border-[#FFFFFF]'>Get Quote Now</button>
      <button className='w-[185px] h-[52px] rounded-3xl bg-[#23A6F0] text-[#fff] text-center hover:bg-transparent hover:border-2 hover:border-[#FFFFFF]'>Learn More</button>
  </div>
          </section>
          <section className='flex flex-col items-center p-[40px] gap-[40px] min-[1400px]:w-[330px] md:w-[300px] md:h-[610px] h-[613px] bg-[#FFFFFF] rounded-lg'>
              <h3 className='text-[24px] text-black text-center font-bold'>Book Appointment</h3>
              <form className='flex flex-col w-[248px] h-[369px] gap-[10px]'>
                  <div className='h-[84px] flex flex-col justify-evenly'>
                      <label htmlFor='name'className='text-[14px] font-semibold'>Name</label>
                      <input type='text' placeholder='Full Name' id='name' className='text-[#737373] pl-[10px] text-[14px] h-[50px] top-[34px] bg-[#F9F9F9] border-2 border-[#E6E6E6] rounded-lg focus:outline-none'></input>
                  </div>
                  <div className='h-[84px] flex flex-col justify-evenly'>
                      <label htmlFor='email'className='text-[14px] font-semibold'>Email</label>
                      <input type='email' placeholder='example@gmail.com' id='email' className='text-[#737373] pl-[10px] text-[14px] h-[50px] top-[34px] bg-[#F9F9F9] border-2 border-[#E6E6E6] rounded-lg focus:outline-none'></input>
                  </div>
                  <div className='h-[84px] flex flex-col justify-evenly'>
                      <label htmlFor='dept'className='text-[14px] font-semibold'>Department</label>
                      <input type='text' placeholder='Please Select' id='dept' className='text-[#737373] pl-[10px] text-[14px] h-[50px] top-[34px] bg-[#F9F9F9] border-2 border-[#E6E6E6] rounded-lg focus:outline-none'></input>
                  </div>
                  <div className='h-[84px] flex flex-col justify-evenly'>
                      <label htmlFor='time'className='text-[14px] font-semibold'>Time</label>
                      <input type='text' placeholder='4:00 Available' id='time' className='text-[#737373] pl-[10px] text-[14px] h-[50px] top-[34px] bg-[#F9F9F9] border-2 border-[#E6E6E6] rounded-lg focus:outline-none'></input>
                  </div>
              </form>
              <button className='text-[#FFFFFF] bg-[#23A6F0] w-[248px] h-[52px] rounded-md text-center font-bold'>Book Appointment</button>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home
