import { PrismicNextImage } from '@prismicio/next';
import React from 'react'
import Button from '../buttons/Button';

const Featured = ({slice}) => {
    console.log("Featured: ", slice.primary);
  return (
    <div className='max-w-360 w-full mx-auto mt-32.75 px-26 relative'>
       <PrismicNextImage field={slice.primary.image} />
       <div className='absolute max-w-230 wi-full top-[335px] left-104 p-10.5 flex flex-col bg-white rounded-3xl shadow-2xl'>
          <div className='flex gap-2 items-center'>
            <p className='font-bold text-[12px] leading-[150%] text-[#333333]'>{slice.primary.label}</p>
            <p className='font-medium text-[12px] leading-[150%] text-[#999999]'>{slice.primary.date}</p>
          </div>

          <h2 className='font-bold mt-6.25 text-[32px] leading-11.25 -tracking-[1px] text-[#333333]'>{slice.primary.title}</h2>
          <p className='font-normal text-[16px] leading-[150%] text-[#666666]'>{slice.primary.description}</p>

          {
            slice?.primary?.button && (
                <div className='flex gap-12 mt-9.5'>
                    {
                         slice?.primary?.button?.map((btn,idx)=>{
                            return <Button key={idx} label={btn.link.text} varient={btn.link.variant} />
                         })
                    }
                </div>
            )
          }
       </div>
    </div>
  )
}

export default Featured
