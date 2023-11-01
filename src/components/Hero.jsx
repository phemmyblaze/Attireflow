import React from 'react'

const Hero = () => {
  return (
    <div className=' text-white h-[50vh]'>
        <div className=' flex flex-col gap-7 mt-20'>
            <h1 className='crimson text-6xl md:w-[70%] w-full text-[#]'>Discover Your Heritage in Every Thread</h1>
            <p className=' text-lg lg:w-[30%] md:w-[50%] w-full'>Step into a world where tradition and fashion unite. Our native attire collections celebrate culture with style.</p>

            <div className='flex flex-col gap-5'>
                <button className='bg-[#085CB2]  w-[163px] h-[41px] rounded-md flex items-center justify-center text-sm font-bold'>Shop Now</button>
                <div className='flex md:text-6xl text-4xl gap-4 crimson'>
                    <div>
                        <span>75M +</span>
                    </div>
                    <div className='border-[#cee1f5] border-l-4'></div>
                    <div>
                        <span>20 +</span>
                    </div>
                    <div className='border-[#cee1f5] border-l-4'></div>
                    <div>
                        <span>200k+</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero