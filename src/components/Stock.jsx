import React from 'react'
import { attires } from '../Assets/Data'
import like from '../Assets/like.svg'
import Star from '../Assets/star.svg'
import EmptyStar from '../Assets/empty.svg'
const Stock = () => {
  return (
    <div className='flex flex-col gap-10  items-center justify-center mt-5'>
        <h1 className='md:text-[48px] text-[30px] leading-normal text-[#085CB2] text-center'>Several unique attires are new in stock</h1>
        <div className={`flex flex-wrap gap-10 items-center justify-center`}>
            {
                attires.map((item, index) => {
                    return (
                        <div key={index} >
                            <div className={`w-[320px]  h-[300px] rounded-2xl bg-[#d6eaff] p-5  `}>
                                <img src={like} alt="like" className=' float-right' />

                            </div>
                            <div className='flex flex-col'>
                                <span>{item.title}</span>
                                <span>₦{item.price}</span>
                                <div className='flex'>
                                    <img src={Star} className='w-[20px]' alt="" />
                                    <img src={Star} className='w-[20px]' alt="" />
                                    <img src={Star} className='w-[20px]' alt="" />
                                    <img src={Star} className='w-[20px]' alt="" />
                                    <img src={EmptyStar} className='w-[20px]' alt="" />

                                </div>
                            </div>
                             <button className='bg-[#20B208] px-4 py-2 rounded-md mt-4 text-white text-sm'>Shop Now</button>

                        </div>
                    )
                })
            }

        </div>
        
    </div>
  )
}

export default Stock