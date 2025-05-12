import Image from "next/image";




const ServiceInfo = ({data}) => {
  return (
    <div className="section-container mt-22">
        <h2 className="text-6xl font-semibold">Details</h2> 
        <div className="mt-6">
            <p className="text-xl lg:text-2xl">{data.detailsSection.serviceTagline}</p>
            <p className="mt-10 text-md md:text-lg max-w-5xl mb-3">{data.detailsSection.para1}</p>
            <p className="mt-10 text-md md:text-lg max-w-5xl mb-12">{data.detailsSection.para2}</p>   
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <Image src={data.detailsSection.img1} width={640} height={430} alt={data.serviceName} className="h-full object-cover rounded-2xl object-center"/>
            <Image src={data.detailsSection.img2} width={640} height={430} alt={data.serviceName} className="h-full object-cover rounded-2xl object-center"/>
        </div>
    </div>
  )
}

export default ServiceInfo;