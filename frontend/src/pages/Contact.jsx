import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t border-gray-300'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className="w-full md:max-w-[480px]" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-800'>Our Store</p>
          <p className='text-gray-600'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-600'>Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com</p>
          <p className='font-semibold text-xl text-gray-800'>Careers at Forever</p>
          <p className='text-gray-600'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm cursor-pointer hover:bg-black hover:text-white transition all duration-500'>Explore jobs</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
