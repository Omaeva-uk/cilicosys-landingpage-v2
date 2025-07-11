import React from 'react'
import { AboutContent, AboutCulture, AboutHero } from './_component';
import { Cta } from '../_components';


const page = () => {
  return (
    <div>
        <section className=''><AboutHero /></section>
        <section className='-mt-1'><AboutCulture /></section>
        <section className='-mt-1'><Cta /></section>
        {/* <section className='section-container'><AboutContent /></section> */}
    </div>
  )
}

export default page;