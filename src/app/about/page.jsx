import React from 'react'
import { AboutContent, AboutCulture, AboutHero } from './_component';


const page = () => {
  return (
    <div>
        <section className=''><AboutHero /></section>
        <section className='-mt-1'><AboutCulture /></section>
        <section className='section-container'><AboutContent /></section>
    </div>
  )
}

export default page;