import Image from "next/image";
import img1 from "../../../../public/assets/cta-section/img-1.png";
import img2 from "../../../../public/assets/cta-section/img-2.png";
import img3 from "../../../../public/assets/cta-section/img-3.png";
import img4 from "../../../../public/assets/cta-section/img-4.png";
import img5 from "../../../../public/assets/cta-section/img-5.png";

const CtaImageHover = () => {
  return (
    <div className="flex overflow-hidden relative">
        <div className=" relative -bottom-20"><Image src={img1} width={350} height={380}  alt="Cta Image"/></div>
        <div className="relative -bottom-20 -ml-15"><Image src={img2} width={300} height={380}  alt="Cta Image"/></div>
        <div className="relative -bottom-20 -ml-10"><Image src={img3} width={300} height={380}  alt="Cta Image"/></div>
        <div className="relative -bottom-20 -ml-12"><Image src={img4} width={300} height={380}  alt="Cta Image"/></div>
        <div className="relative -bottom-20 -ml-12"><Image src={img5} width={300} height={380}  alt="Cta Image"/></div>
    </div>
  )
}

export default CtaImageHover;