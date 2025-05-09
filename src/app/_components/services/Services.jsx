"use client";

import { useState } from 'react'
import { SectionTag } from '..';
import { servicesData } from '../data';

const Services = () => {

  const [serviceHover, setServiceHover] = useState(null);

  console.log(serviceHover);

  return (
    <div className='mb-40'>
      <div className='flex justify-center'><SectionTag text="Variety solution for IT services" /></div>
      
      <div className='grid grid-cols-1 mt-22 md:grid-cols-2 gap-7'>
        {
          servicesData.map(item => (
            <a key={item.id} href={item.href} className='max-w-lg h-full'  onMouseEnter={() => setServiceHover(item.id)} onMouseLeave={() => setServiceHover(null)}>
              <h3 className=' text-2xl lg:text-3xl font-bold'>{item.serviceName}</h3>
              <p className='mt-3 mb-8 text-gray-600 '>{item.servicePara}</p>
              <div className='h-[1.7px]'>
                <div className={`${serviceHover === item.id ? 'block' : 'hidden'} h-[1.5px] bg-primary`}></div>
              </div>
              <div className='h-[2px] w-full bg-gray-300'></div>
            </a>
          ))
        }

      </div>
    </div>
  )
}

export default Services;