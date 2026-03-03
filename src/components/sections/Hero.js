import React from 'react'
import Button from '../buttons/Button'
import { PrismicNextImage } from '@prismicio/next'

const Hero = ({slice}) => {
   
  return (
    <div className={`max-w-360 w-full h-199 mx-auto px-28.5 pt-30.5 pb-24.5`}
        style={{backgroundImage: `url(${slice.primary.herobgimg.url})`}}
      >
        <div className='w-full flex gap-11.5'>
          <div className='w-145 text-white flex flex-col'>
             <p className='font-bold leading-[150%] text-[16px] tracking-[10%]'>{slice.primary.label}</p>
             <h2 className='font-bold text-[64px] mt-9.5 leading-21.5'>{slice.primary.title}</h2>
             <p className='font-normal max-w-104 text--16px mt-7 leading-[150%]'>{slice.primary.description}</p>
             {
              slice.primary?.buttons?.map((btn)=>{
                return (
                    <Button key={btn.link.key} label={btn.link.text} varient={btn.link.variant} style={"w-fit mt-16"} />
                )
              })
             }
          </div>
          <PrismicNextImage field={slice.primary.herofhimg} />
        </div>
    </div>
  )
}

export default Hero;