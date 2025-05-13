import Image from "next/image";
import { aboutData } from "../data";
import { SectionTag } from "..";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-7">
      <div data-aos="fade-right">
        <SectionTag text="Who are we" />
        <h2 className="text-3xl md:text-5xl mt-10 mb-7 font-bold max-w-md">{aboutData.heading}</h2>
        <p className="max-w-lg">{aboutData.para}</p>
      </div>
      <div data-aos="fade-left">
        <div className=" relative"><Image src={aboutData.img} width={500} height={360} className="w-full" alt="about image"/><button className="bg-primary absolute bottom-5 left-5 py-2 px-5 text-white rounded-full">Learn more &middot;</button></div>
        <div className="grid grid-cols-2 gap-5 mt-3 justify-items-center">
          {
            aboutData.stats.map(item => (
              <div className="flex max-w-[200px] flex-col gap-5">
                <p className="text-4xl md:text-6xl font-semibold text-primary">{item.highlight}</p>
                <p>{item.para}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About;