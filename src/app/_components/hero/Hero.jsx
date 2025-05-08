import { heroData } from "../data";
import Image from "next/image";
import downArrow from "../../../../public/assets/down-arrow.svg";
import { PrimaryButton } from "..";
import heroBg from "../../../../public/assets/hero/hero-bg-1.png";

const Hero = () => {
  return (
    <div className="h-screen relative bg-[url(/assets/hero/hero-bg-1.png)] bg-blue p-7 bg-no-repeat md:bg-cover bg-top">
      <div className="section-container px-0 w-full pt-22 xl:pt-50 ">
        <h1 className="max-w-2xl text-5xl xl:text-6xl font-bold leading-tight">{heroData.heading}</h1>
        <div className="flex mt-18 lg:mt-22 justify-between">
          <div className=" max-md:hidden flex self-end items-center gap-3 max-w-[150px]"><div><Image src={downArrow} width={20} height={10} alt="Down arrow" /></div>Scroll down to view more</div>
          <div>
            <p className="max-w-sm mb-5">{heroData.heroPara}</p>
            <PrimaryButton text="Consult Now" icon={true} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero;