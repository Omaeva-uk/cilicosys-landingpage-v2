import Image from "next/image";
import React from "react";
import heroBg from "../../../../public/assets/hero/hero-new/hero-bg.png";
import heroRightImage from "../../../../public/assets/hero/hero-new/hero-img-right.png";
import Link from "next/link";


const services = [
  {
    id: 1,
    title: "Strategic IT Consulting",
    description: "Expert IT strategies for business transformation.",
    img: "/assets/hero/hero-new/hero-card-img-1.png"
  },
  {
    id: 2,
    title: "Managed Cloud & Infra",
    description: "AWS, Azure & VM management. Robust IT infrastructure support.",
    img: "/assets/hero/hero-new/hero-card-img-1.png"
  },
  {
    id: 3,
    title: "Global IT Partnership",
    description: "Trusted by 1000+ companies worldwide for advanced IT.",
    img: "/assets/hero/hero-new/hero-card-img-1.png"
  }
];

const Hero1 = () => {
  return (
    <div className="lg:h-screen border pt-20 relative">
      <div className=" absolute pointer-events-none inset-0"><Image src={heroBg} width={500} height={500} alt="hero-bg" className="w-full h-full object-cover object-center" /></div>
      <div className="section-container flex max-sm:flex-col justify-between items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-[130%]">Transforming IT for Business Growth</h1>
          <p className="mt-3 mb-6">Unlock efficiency and innovation with our expert IT consultancy. We provide tailored cloud, infrastructure, and strategic solutions to empower your success.</p>
          <button className="bg-primary max-md:hidden py-2 rounded-4xl text-white font-medium px-5">Consult now</button>
        </div>
        <div>
          <Image src={heroRightImage} width={500} height={500} alt="Hero right Image" />
        </div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:-mt-20 justify-between section-container items-center">
      {
        services.map(({ id, title, description, img }) => (
        <div key={id} className=" max-lg:flex-col flex  gap-3 justify-between items-start border p-3 rounded-3xl">
          <Image src={img} width={75} height={75} alt={title} />
          <div>
            <h3 className="font-bold mb-2">{title}</h3>
            <p>{description}</p>
          </div>
          
        </div>
      ))
      }
    </div>
    </div>
  );
};

export default Hero1; 