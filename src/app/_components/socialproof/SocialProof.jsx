import { socialProofData } from "../data";
import Image from "next/image";

const SocialProof = () => {
  return (
    <div className=" mb-20 xl:mb-40">
      <div className="grid grid-cols-4 justify-items-center gap-7">
        {
          socialProofData.map((item, i) => (
            <div key={i}><Image src={item} width={180} height={100} alt="Social Proof"/></div>
          ))
        }
      </div>
    </div>
  )
}

export default SocialProof;