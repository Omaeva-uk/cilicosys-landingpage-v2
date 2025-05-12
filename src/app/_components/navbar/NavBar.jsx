"use client";


import Image from "next/image";
import logo from "../../../../public/assets/main-logo.svg";
import { PrimaryButton } from "..";
import { useState } from "react";
import menuOpen from "../../../../public/assets/menu-open.svg";
import menuClose from "../../../../public/assets/menu-close.svg";
import { usePathname } from "next/navigation";

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
  // {
  //   id: 3,
  //   item: "VCloud",
  //   href: "/vcloud",
  // },
  {
    id: 4,
    item: "Services",
    href: "/#services",
  },
]

const NavBar = () => {

  const [navOpen, setNavOpen] = useState(false);

  const pathname = usePathname();
  //console.log(pathname);




  return (
    <header className={`${pathname === "/about" ? 'relative' : 'absolute left-0 right-0 top-0'}'section-container   z-[999]  p-0 max-w-full px-0'`}>
      <nav className="">
        <div className="md:flex justify-between hidden">
              <a href="/" className="px-7 xl:ml-26"><Image src={logo} width={140} height={72} alt="Cilicosys logo" /></a>
              <div className="flex gap-7 justify-between items-center">
                <ul className="flex gap-7">
                  {
                    navItems.map(item => (
                      <a key={item.id} href={item.href}><li>{item.item}</li></a>
                    ))
                  }
                </ul>
                <PrimaryButton text="Get in touch" icon={true} />
              </div>
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
         
      </nav>

     
    </header>
  )
}

export default NavBar;