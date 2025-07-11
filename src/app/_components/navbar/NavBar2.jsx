"use client"

import Image from "next/image";
import logo from "../../../../public/assets/main-logo.svg";
import Link from "next/link";
import { useState } from "react";
import menuOpen from "../../../../public/assets/menu-open.svg";
import menuClose from "../../../../public/assets/menu-close.svg";

const navItems = [
  {
    id: 1,
    item: "Home",
    href: "/",
  },
  {
    id: 2,
    item: "About",
    href: "/about",
  },
  {
    id: 3,
    item: "Services",
    href: "/#services",
  },
]

const NavBar2 = () => {

    const [activenavItem, setActivenavItem] = useState("Home");
    const [navOpen, setNavOpen] = useState(false);



  return (
    <header className="absolute top-0 z-[9999] left-0 px-3 md:px-12 right-0" >
        <div className="flex  relative z-[9999] justify-between items-center">
            <Link href="/"><Image src={logo} width={140} height={72} alt="Main logo" className="max-md:hidden max-lg:w-28"/></Link>
            <nav className="flex max-md:hidden max-lg:text-sm lg:mt-3 bg-white rounded-4xl justify-between gap-1  lg:py-3 py-1 lg:px-5 px-1 items-center shadow-[5px_4px_24px_-10px_rgba(0,_0,_0,_0.1)]">
                {
                    navItems.map(item => (
                        <Link key={item.id} onClick={() => setActivenavItem(item.item)} href={item.href} className={`${activenavItem === item.item ? 'bg-primary text-white' : ''} rounded-4xl lg:py-2 py-1 lg:px-5 px-2`}>{item.item}</Link>
                    ))
                }
            </nav>
            <Link href="/#contact-us" className=" cursor-pointer"><button className="bg-primary max-md:hidden py-2 rounded-4xl text-white font-medium px-5">Get in touch</button></Link>
            
        </div>
        <div className={`md:hidden flex px-7 items-center relative justify-between `}>
                  <div className=""><Image src={logo} width={100} height={72} alt="Cilicosys logo" /></div>
                  <div onClick={() => setNavOpen(prev => !prev)} className=" cursor-pointer" ><Image src={!navOpen ? menuOpen : menuClose } width={30} height={30} className="pt-5 opacity-90" alt="Menu icon"/></div>
                  <div className={`bg-white text-black text-right font-semibold p-7 absolute top-15 left-0 right-0 ${navOpen ? "block" : "hidden"}`}>
                    <ul className=" flex flex-col gap-3">
                      {
                        navItems.map(item => (
                          <a href={item.href} key={item.id}><li>{item.item}</li></a>
                        ))
                      }
                    </ul>
                  </div>
                </div>
    </header>
  )
}

export default NavBar2;