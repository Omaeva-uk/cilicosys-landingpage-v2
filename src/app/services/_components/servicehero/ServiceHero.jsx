import Image from "next/image";
import downArrow from "../../../../../public/assets/down-arrow.svg";






const ServiceHero = ({data}) => {
  return (
    <div className="h-screen relative bg-[url(/assets/hero/hero-bg-1.png)] bg-blue p-7 bg-no-repeat md:bg-cover bg-top">
        <div className="section-container px-0 w-full pt-30 xl:pt-50 ">
            <h1 className="text-center text-5xl xl:text-7xl font-bold leading-tight">{data.serviceHeading}</h1>
            <p className="mt-5 max-w-4xl mx-auto text-lg text-center">{data.servicePara}</p>
        </div>
        <div>
            <div className=" max-md:hidden absolute bottom-20 left-20 flex self-end items-center gap-3 max-w-[150px]"><div><Image src={downArrow} width={20} height={10} alt="Down arrow" /></div>Scroll down to view more</div>
        </div>
    </div>
  )
}

export default ServiceHero;