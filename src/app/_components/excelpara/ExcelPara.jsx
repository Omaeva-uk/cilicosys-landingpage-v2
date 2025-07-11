import Image from "next/image";
import ringBg1 from "../../../../public/assets/excell-section/ring-bg.png";



const ExcelPara = () => {
  return (
    <div className="text-3xl sm:text-4xl lg:text-5xl relative font leading-tight lg:h-[450px]  flex items-center overflow-hidden">
      <p className="max-w-6xl mx-auto">We excel in IT consultancy and services, leveraging <span className="text-primary"> industry trends and advanced technologies </span> to deliver tailored solutions that empower businesses.</p>
      <div className=" absolute top-0 left-0 pointer-events-none" ><Image src={ringBg1} width={300} height={500} alt="Background" className="max-md:max-w-[150px] pointer-events-none" /></div>
      <div className=" absolute scale-x-[-1] top-0 right-0 pointer-events-none" ><Image src={ringBg1} width={300} height={500} alt="Background"  className="max-md:max-w-[150px] pointer-events-none" /></div>
    </div>
  )
}

export default ExcelPara;