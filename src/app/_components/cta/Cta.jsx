import { PrimaryButton } from "..";
import ctaBg from "../../../../public/assets/cta-section/cta-bg.png";
import { ctaData } from "../data";
import CtaImageHover from "./CtaImageHover";

const Cta = () => {
  return (
    <div className='min-h-[500px] pt-18 bg-[url(/assets/cta-section/cta-bg.png)] bg-no-repeat bg-cover bg-center'>
        <div className="max-w-2xl mx-auto">
          <h2 data-aos="fade-up" className="text-3xl md:text-5xl lg:text-6xl mt-10 mb-7 text-center font-bold">{ctaData.heading}</h2>
          <p data-aos="fade-up" className='max-lg:max-w-xl mt-5 mb-10 text-center'>{ctaData.para}</p>
          <div data-aos="zoom-in" className="max-w-fit mx-auto">
            <form action="">
              <div className="flex"><input type="email" required placeholder="Enter you email here" className="outline-0 bg-white px-3" name="email" /><PrimaryButton text="Get in touch" /></div>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mt-7 md:mt-12 lg:mt-18 xl:mt-22 mx-auto">
          <CtaImageHover />
        </div>
    </div>
  )
}

export default Cta;