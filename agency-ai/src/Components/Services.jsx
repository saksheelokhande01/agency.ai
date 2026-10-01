import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

    const serviceData = [
        {
           title: 'Advetising',
           description: 'We turn bold ideas into poerful figital solutions that connect, engage...',
           icon: assets.ads_icon
        },

        {
           title: 'Content marketing',
           description: 'We help you execute your plan and diliver results.',
           icon: assets.marketing_icon
        },

         {
           title: 'Content writing',
           description: 'We help you create a marketing strategy that drives results.',
           icon: assets.content_icon
        },
        {
           title: 'social media',
           description: 'We help you build a strong social media presence and engage with your audiance.',
           icon: assets.social_icon
        },

    ]



  return (
    <motion.div

     initial="hidden"
     whileInView="visible"
     viewport={{once: true}}
     transition={{staggerChildren: 0.2}}
     
    
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white '>
        <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70 -z-10 dark:hidden'/>

        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forword.'/>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-fu;; max-w-6xl'>
            {serviceData.map((service, index)=>(
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>

    </motion.div>
  )
}

export default Services