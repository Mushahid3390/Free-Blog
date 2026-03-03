import { PrismicNextImage } from '@prismicio/next'
import React from 'react'

const AboutHero = ({slice}) => {
  return (
    <div className='max-w-360 w-full mx-auto pt-18.5 pb-25 px-26 flex flex-col items-center gap-6.25'>
      <p className='font-bold text-[16px] leading-[150%] tracking-[10%] text-[#666666]'>{slice.primary.label}</p>
      <h1 className='font-bold text-[48px] text-center leading-[63.98px] max-w-182 tracking-[10%] text-[#333333]'>{slice.primary.title}</h1>
      <p className='font-normal text-[16px] text-center leading-[150%] max-w-252.5 tracking-[10%] text-[#666666]'>{slice.primary.description}</p>
       <PrismicNextImage field={slice.primary.image} className='mt-30.75'/>
    </div>
  )
}

export default AboutHero
