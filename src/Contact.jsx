import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import BackgroundImage from "./Assets/ankara.png";
import person from './Assets/person.svg'
import mail from './Assets/mail.svg'
import message from './Assets/message.svg'
const Contact = () => {
  return (
        <div className='h-full w-full'>
        <div
				className="   h-full"
				style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${BackgroundImage})`,
				}}
			>
				<div className="">
          <NavBar />
					<h2 className="text-[#085cb2] md:text-[100px] text-[50px] flex items-center justify-center font-extrabold h-[50vh]">Contact Us</h2>
				</div>
			</div>
        <div className=''>
          <form action="" className='flex flex-col items-center justify-center border border-[#085cb2] md:w-[660px] w-[95%]  mx-auto h-full py-10 pb-32 my-10 rounded-lg gap-10' >
            <h1 className='md:text-[50px] text-[32px] text-[#085cb2] '>Contact Form</h1>
            <div className='flex flex-col gap-10'>
              <div className='bg-[#d6eaff] flex items-center  gap-5 px-8 py-4 md:w-[500px] w-full rounded-md'>
                <img src={person} alt="img" />
                <input type="text" placeholder='Your Name' className='bg-inherit placeholder:text-[#085cb2] placeholder:font-bold w-full outline-none h-full text-gray-800 text-[18px]' />
              </div>
              <div className='bg-[#d6eaff] flex items-center  gap-5 px-8 py-4 md:w-[500px] w-full rounded-md'>
                <img src={mail} alt="img" />
                <input type="text" placeholder='Email' className='bg-inherit placeholder:text-[#085cb2] placeholder:font-bold w-full outline-none h-full text-gray-800 text-[18px]' />
              </div>
              <div className='bg-[#d6eaff] flex items-center  gap-5 px-8 py-4 md:w-[500px] w-full rounded-md'>
                <img src={message} alt="img" />
                <input type="text" placeholder='Message' className='bg-inherit placeholder:text-[#085cb2] placeholder:font-bold w-full outline-none h-full text-gray-800 text-[18px]' />
              </div>
              <button className='bg-[#085CB2] flex items-center justify-center px-8 py-3 md:w-[500px] w-full rounded-md mt-10 text-white'>
                Send
              </button>

            </div>

          </form>
        </div>


        <Footer />
        </div>

  
  )
}

export default Contact