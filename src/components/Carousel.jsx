import React from 'react'
import profile from '../Assets/profile.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const DemoCarousel = () => {
    
  return (
    <div className='px-2'>
    <header className='crimson text-center my-10 md:text-[48px] text-[24px] text-[#085CB2]'>What Our Customers are Saying</header>
    <div className=" border p-2 rounded-md border-[#085CB2] flex items-center flex-col gap-5">
      <h1 className='text-center text-[30px] text-[#085CB2] '>Customer Review</h1>

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        transitionTime={2000}
        stopOnHover={true}
        // axis='vertical'
       className="w-[100%]  ">
        <div className="flex flex-col md:flex-row items-center justify-center h-full  gap-20 ">
          <img src={profile} alt="" className="md:w-[300px] h-[405px] w-full rounded-[30px]" />
          <div className='flex flex-col gap-10 '>
            <p className='text-[18px] text-[#2F8CED] text-left'>
              I recently purchased some beautiful native attire from Picamp, and
              I couldn't be happier with my experience! The selection they offer
              is impressive, and I was able to find the perfect outfit for a
              special event. The quality of the attire exceeded my expectations,
              and it was evident that attention to detail and craftsmanship went
              into its creation.
            </p>
            <h1 className='text-[#085CB2] text-[18px]  text-left' >Amanda Olaogun</h1>

          </div>
          </div>
        <div className="flex flex-col md:flex-row items-center justify-center h-full  gap-20">
          <img src={profile} alt="" className="md:w-[300px] h-[405px] w-full rounded-[30px]" />
          <div className='flex flex-col gap-10 '>
            <p className='text-[18px] text-[#2F8CED] text-left'>
              I recently purchased some beautiful native attire from Picamp, and
              I couldn't be happier with my experience! The selection they offer
              is impressive, and I was able to find the perfect outfit for a
              special event. The quality of the attire exceeded my expectations,
              and it was evident that attention to detail and craftsmanship went
              into its creation.
            </p>
            <h1 className='text-[#085CB2] text-[18px]  text-left' >Amanda Olaogun</h1>

          </div>
          </div>
        <div className="flex flex-col md:flex-row items-center justify-center h-full  gap-20">
          <img src={profile} alt="" className="md:w-[300px] h-[405px] w-full rounded-[30px]" />
          <div className='flex flex-col gap-10 '>
            <p className='text-[18px] text-[#2F8CED] text-left'>
              I recently purchased some beautiful native attire from Picamp, and
              I couldn't be happier with my experience! The selection they offer
              is impressive, and I was able to find the perfect outfit for a
              special event. The quality of the attire exceeded my expectations,
              and it was evident that attention to detail and craftsmanship went
              into its creation.
            </p>
            <h1 className='text-[#085CB2] text-[18px]  text-left' >Amanda Olaogun</h1>

          </div>
          </div>
        
        </Carousel>
        </div>
    </div>
  );
}

export default DemoCarousel