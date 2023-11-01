import React from 'react'
import profile from '../Assets/profile.jpg'

export const DemoCarousel = () => {
    
  return (
    <>
    <header className='crimson text-center my-10 text-[48px] text-[#085CB2]'>What Our Customers are Saying</header>
    <div autoPlay className=" border m-4  p-10 rounded-[30px] border-[#085CB2] flex items-center flex-col gap-20">
      <h1 className='text-center text-[30px] text-[#085CB2] '>Customer Review</h1>
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          <img src={profile} alt="" className="md:w-[300px] h-[405px] w-full rounded-[30px]" />
          <div className='flex flex-col gap-10 '>
            <p className='text-[18px] text-[#2F8CED] '>
              I recently purchased some beautiful native attire from Picamp, and
              I couldn't be happier with my experience! The selection they offer
              is impressive, and I was able to find the perfect outfit for a
              special event. The quality of the attire exceeded my expectations,
              and it was evident that attention to detail and craftsmanship went
              into its creation.
            </p>
            <h1 className='text-[#085CB2] text-[18px] ' >Amanda Olaogun</h1>

          </div>
        </div>
        {/* <div className='flex'>
            <img src={profile} alt="" className='w-[300px]' />
            <div>
                <h1>Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque minima tempora nostrum cupiditate nam ullam! Non omnis doloribus, modi voluptate voluptatibus, aut, necessitatibus officia in quia eveniet deleniti ducimus? Ducimus.</p>
            </div>
        </div>
        <div className='flex'>
            <img src={profile} alt="" className='w-[300px]' />
            <div>
                <h1>Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque minima tempora nostrum cupiditate nam ullam! Non omnis doloribus, modi voluptate voluptatibus, aut, necessitatibus officia in quia eveniet deleniti ducimus? Ducimus.</p>
            </div>
        </div> */}
      </div>
    </div>
    </>
  );
}

export default DemoCarousel