import Image from "next/image";
import { aboutPageData } from "../../data";

const AboutContent = () => {
  return (
    <div className="mt-22">
        <div className='grid text-lg grid-cols-1 md:grid-cols-2 gap-7'>
            <div>
                <p className="mb-7">{aboutPageData.contentSection.para1}</p>
                <p>{aboutPageData.contentSection.para2}</p>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-7 max-sm:h-[500px]">
                <div className="rounded-2xl overflow-hidden relative"><Image src={aboutPageData.contentSection.img1} layout="fill" className="w-full object-cover object-center" /></div>
                <div className="rounded-2xl overflow-hidden relative"><Image src={aboutPageData.contentSection.img2} layout="fill" className="w-full object-cover object-center" /></div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;