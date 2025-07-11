import { SectionTag } from '@/app/_components';
import { aboutData } from '@/app/_components/data';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className="py-16 max-sm:mt-12 md:py-24 bg-white relative overflow-hidden">
      <div className="section-container flex flex-col gap-16">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font mb-4">Our Core Vision & Foundation</h2>
            <p className="text-gray-700 text-base md:text-lg">
              At Cilicosys Technologies, we specialize in delivering robust IT Infrastructure implementation and management solutions. We understand that in today's rapidly evolving business landscape, a resilient IT foundation is paramount. Our mission is to empower organizations by ensuring their infrastructure is not just operational, but highly scalable and adaptable to ever-changing demands.
            </p>
          </div>
          <div className="flex-1 flex  justify-center">
            <div className="w-full  rounded-2xl overflow-hidden shadow-md flex items-center justify-center">
              <Image src="/assets/about-page/img-1.png" alt="Team working together" width={400} height={300} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font mb-4">Defining True IT Excellence</h2>
            <p className="text-gray-700 text-base md:text-lg">
              Cilicosys Technologies is a leading provider of comprehensive IT Infrastructure implementation and management. Recognizing the dynamic nature of modern business, we are committed to building IT infrastructures that are inherently flexible and scalable, designed to evolve alongside your organizational needs.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-md flex items-center justify-center">
              <Image src="/assets/about-page/img-2.png" alt="Team discussion" width={400} height={300} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;