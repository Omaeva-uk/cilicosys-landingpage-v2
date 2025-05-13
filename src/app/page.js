import { Hero, SocialProof, About, ExcelPara, Services, Testimonial, Cta, AOSinit } from "./_components";

export default function Home() {
  return (
    <AOSinit>
      <div className="">
        <section className=""><Hero /></section>
        <section data-aos="fade-up" className="section-container mt-22"><SocialProof /></section>
        <section className="section-container"><About /></section>
        <section data-aos="fade-up" className="section-container"><ExcelPara /></section>
        <section id="services" className="section-container"><Services /></section>
        <section className="section-container"><Testimonial /></section>
        <section id="cta"><Cta /></section>
      </div>
    </AOSinit>
    
  );
}
