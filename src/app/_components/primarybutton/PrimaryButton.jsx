import Image from "next/image";
import crossArrow from "../../../../public/assets/cross-down-arrow.svg";

const PrimaryButton = ({text, icon}) => { 
  return (
    <a href="/#cta" className="cursor-pointer"><button className="flex cursor-pointer gap-5 bg-primary py-6 px-6 xl:py-6 xl:px-10 font-semibold text-white">{text}<div className={`${icon ? "black" : "hidden"}`}><Image src={crossArrow} width={18} height={5} alt="Cross down arrow" /></div></button></a>
    
  )
}

export default PrimaryButton;