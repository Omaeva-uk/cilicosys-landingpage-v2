import { PrimaryButton } from "..";
import ctaBg from "../../../../public/assets/cta-section/cta-bg.png";
import { ctaData } from "../data";
import CtaForm from "./CtaForm";
import CtaForm1 from "./CtaForm1";
import CtaImageHover from "./CtaImageHover";

const Cta = () => {
  return (
    <div id="contact-us" className='min-h-[500px] pt-18 bg-[url(/assets/cta-section/cta-bg.png)] bg-no-repeat bg-cover bg-center'>
        <div className="max-w-2xl mx-auto">
          <h2 data-aos="fade-up" className="text-3xl md:text-5xl lg:text-6xl mt-10 mb-7 text-center font">{ctaData.heading}</h2>
          <p data-aos="fade-up" className='max-lg:max-w-xl mt-5 mb-10 text-center'>{ctaData.para}</p>
          <div data-aos="zoom-in" className="max-w-fit mx-auto">
            <CtaForm1 />
          </div>
        </div>
        <div className="max-w-7xl mt-7 md:mt-12 lg:mt-18 xl:mt-22 mx-auto">
          <CtaImageHover />
        </div>
    </div>
  )
}

export default Cta;