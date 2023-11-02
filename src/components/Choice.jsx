import React from 'react'
import ship from '../Assets/ship.svg'
import payment from '../Assets/payment.svg'
import quality from '../Assets/quality.svg'
import support from '../Assets/support.svg'

const Choice = () => {
  return (
    <div className='px-8 mt-20'>
        <h1 className='text-center mb-20 md:text-[48px] text-[24px] text-[#085cb2] font-bold'>What Makes Us the Preferred Choice?</h1>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col md:flex-row gap-10 justify-between items-center'>
                <div className=' flex items-center md:justify-center gap-10 justify-between  w-full'>
                    <img src={ship} alt="" className='w-[80px]' />
                    <h1 className='text-[#2f8ced] text-[20px] md:text-[30px] font-bold leading-[150%] '>SECURE SHIPPING</h1>
                </div>
                <div className=' flex items-center md:justify-center gap-10 justify-between  w-full'>
                    <img src={payment} alt="" className='w-[80px]' />
                    <h1 className='text-[#2f8ced] text-[20px] md:text-[30px] font-bold leading-[150%]'>EASY PAYMENT</h1>
                </div>
            </div>
            <div className='flex justify-between flex-col md:flex-row gap-10  items-center'>
            <div className=' flex items-center md:justify-center gap-10 justify-between  w-full'>
                    <img src={quality} alt="" className='w-[80px]' />
                    <h1 className='text-[#2f8ced] text-[20px] md:text-[30px] font-bold leading-[150%]'>QUALITY ATTIRES</h1>
                </div>
                <div className=' flex items-center md:justify-center gap-10 justify-between  w-full'>
                    <img src={support} alt="" className='w-[80px]' />
                    <h1 className='text-[#2f8ced] text-[20px] md:text-[30px] font-bold leading-[150%]'>24/7 SUPPORT</h1>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Choice