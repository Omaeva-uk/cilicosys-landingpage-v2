import { SectionTag } from '@/app/_components';
import React from 'react'
import { aboutPageData } from '../../data';

const AboutCulture = () => {
  return (
    <div className='bg-[#151C21] py-14'>
        <div className='section-container'>
            {/* <SectionTag text="Our Culture" /> */}
            <div className='mt-12'>
                {
                    aboutPageData.cultureContent.map(item => (
                        <div key={item.id} className='mt-10'>
                            <h2 className='text-3xl md:text-4xl font-semibold text-white'>{item.heading}</h2>
                            <p className='text-white/80 mt-5 text-md md:text-lg max-w-5xl'>{item.para}</p>
                        </div>
                    ))
                }
            </div> 
        </div>
       
    </div>
  )
}

export default AboutCulture;