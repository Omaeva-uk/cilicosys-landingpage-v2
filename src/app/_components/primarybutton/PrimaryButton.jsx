import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import crossArrow from "../../../../public/assets/cross-down-arrow.svg";

const PrimaryButton = ({text, icon}) => { 
  return (
    <a href="/#cta" className="cursor-pointer"><InteractiveHoverButton className="flex cursor-pointer gap-5  font-semibold">{text}<div className={`${icon ? "black" : "hidden"}`}></div></InteractiveHoverButton></a>
    
  )
}

export default PrimaryButton;