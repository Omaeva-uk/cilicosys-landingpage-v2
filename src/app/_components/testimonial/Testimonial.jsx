import { SectionTag } from '..';
import { testimonialData } from '../data';
import { TestimonialMarquee } from './TestimonialMarquee';


const Testimonial = () => {
  return (
    <div className='mb-40'>
      <div className='grid grid-cols-1 lg:grid-cols-2  gap-7'>
        <div className='max-lg:mb-12'>
          <div><SectionTag text="Read what our client’s say" /></div>
          <h2 className="text-3xl md:text-5xl mt-10 mb-7 font-bold max-w-md">{testimonialData.heaidng}</h2>
          <p className='max-lg:max-w-xl'>{testimonialData.para}</p>
        </div>
        <div>
          <TestimonialMarquee />
        </div>
      </div>
    </div>
  )
}

export default Testimonial;