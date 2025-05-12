import React from 'react'
import { ServiceHero, ServiceInfo } from '../_components';
import { servicesData } from '../data';


const page = async({params}) => {

    const service = await params;
    //console.log(service.serviceSlug);

    const data = servicesData.find( item => item.slug === service.serviceSlug);
    console.log(data);

  return (
    <div>
        <ServiceHero data={data} />
        <ServiceInfo data={data} />
    </div>
  )
}

export default page;