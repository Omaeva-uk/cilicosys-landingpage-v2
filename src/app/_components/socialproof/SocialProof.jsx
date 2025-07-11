"use client"

import { socialProofData } from "../data";
import Image from "next/image";

const SocialProof = () => {
  // Split the logos into two halves
  const mid = Math.ceil(socialProofData.length / 2);
  const firstRow = socialProofData.slice(0, mid);
  const secondRow = socialProofData.slice(mid);

  return (
    <div className="mb:10 xl:mb-40">
      {/* Top Marquee Row (scrolls right) */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-8 md:gap-10 items-center animate-marquee-right whitespace-nowrap">
          {firstRow.concat(firstRow).map((item, i) => (
            <div key={i} className="inline-block min-w-[100px] md:min-w-[180px] flex items-center justify-center">
              <Image 
                src={item} 
                width={100} 
                height={60} 
                className="w-[100px] h-[60px] md:w-[180px] md:h-[100px] object-contain" 
                alt="Social Proof" 
                priority={i < firstRow.length} 
              />
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Marquee Row (scrolls left) */}
      <div className="overflow-hidden w-full mt-8 md:mt-10">
        <div className="flex gap-8 md:gap-10 items-center animate-marquee-left whitespace-nowrap">
          {secondRow.concat(secondRow).map((item, i) => (
            <div key={i} className="inline-block min-w-[100px] md:min-w-[180px] flex items-center justify-center">
              <Image 
                src={item} 
                width={100} 
                height={60} 
                className="w-[100px] h-[60px] md:w-[180px] md:h-[100px] object-contain" 
                alt="Social Proof" 
                priority={i < secondRow.length} 
              />
            </div>
          ))}
        </div>
      </div>
      {/* Marquee Animations */}
      <style jsx>{`
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-right {
          animation: marqueeRight 18s linear infinite;
        }
        .animate-marquee-left {
          animation: marqueeLeft 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SocialProof;