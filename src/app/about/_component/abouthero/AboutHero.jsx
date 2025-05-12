import { SectionTag } from '@/app/_components';
import { aboutData } from '@/app/_components/data';
import aboutHeroShape from "../../../../../public/assets/about-page/about-hero-shape.svg";
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className='mt-22 overflow-hidden relative'>
        <div className='section-container mb-0'>
            <SectionTag text="About Us" />
            <h1 className="max-w-xl mt-7 text-5xl xl:text-6xl font-bold leading-tight">{aboutData.heading}</h1>  
        </div>
         <div className='relative h-[220px]'><Image src={aboutHeroShape} layout='fill' alt='about hero shape' className=' object-top object-cover' /></div>
    </div>
  )
}

export default AboutHero;