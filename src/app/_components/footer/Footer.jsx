import Image from "next/image";
import { servicesData } from "../data";
import footerLogo from "../../../../public/assets/footer/footer-logo.svg";
import { footerData } from "../data";
import linkedinIcon from "../../../../public/assets/footer/linkedin.svg";
import facebookIcon from "../../../../public/assets/footer/facebook.svg";
import instaIcon from "../../../../public/assets/footer/insta.svg";
import mainLogo from "../../../../public/assets/main-logo.svg";


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
];

const Footer = () => {
  return (
    <footer className="bg-darkGrey p-6 md:p-12 pb-0 text-white">
      <div className="flex flex-wrap justify-between ">
        <div>
          <div><Image src={mainLogo} width={180} height={100} alt="Footer-logo" /></div>
          <p className="max-w-xs mt-7">{footerData.address}</p>
          <div className="mt-7">
            <p className="mb-1">{footerData.contactNumber}</p>
            <a href={`mailto:${footerData.mail}`} >{footerData.mail}</a>
            <div className="flex mt-3 gap-3 items-center">
              <a href=""><Image src={linkedinIcon} width={30} height={30} alt="LinkedIn Icon" /></a>
              <a href=""><Image src={facebookIcon} width={30} height={30} alt="Facebook Icon" /></a>
              <a href=""><Image src={instaIcon} width={30} height={30} alt="Insta Icon" /></a>
            </div>
          </div>
        </div>
        <div className=" flex max-md:mt-7 gap-12 justify-between">
          <div className="flex flex-col gap-3">
            {
              servicesData.map(item => (
                <a key={item.id} href={item.href}>{item.serviceName}</a>
              ))
            }
          </div>
          <div className="flex flex-col gap-3">
            {
              navItems.map(item => (
                <a key={item.id} href={item.href}>{item.item}</a>
              ))
            }
          </div>
        </div>
      </div>
      <div className="h-[1px] mt-12 bg-white/30 w-full"></div>
      <div className="flex pb-3 gap-7 text-xs sm:text-sm text-white/30 justify-between mt-3">
        <p>©Cilicosys. All Rights Reserved.</p>
        <p>Designed and developed by Omaeva Ltd</p>
      </div>
    </footer>
  )
}

export default Footer;