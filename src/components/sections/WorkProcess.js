"use client"
import React, { useState } from 'react'

const WorkProcess = ({slice}) => {
    const [active, setActive] = useState(null);
  return (
      <div className = 'max-w-360 px-26 w-full mx-auto '>
          <p className='font-bold text-[16px] leading-[150%] tracking-[10%] text-[#666666]'>{slice.primary.title}</p>
          <h1 className='font-bold text-[48px] leading-16 max-w-125 text-[#333333] mt-8'>{slice.primary.description}</h1>
      <div className='flex gap-4 mt-21.75'>
              {slice?.primary?.processsteps?.map((item,idx)=>{
                  return <div onClick={()=>{
                      setActive(idx + 1)
                  }} className={`${active && active == idx + 1 && "bg-[#7C4EE4]"} rounded-2xl p-6 flex flex-col gap-2`}>
                      <h2 className={`font-bold text-[72px] leading-24 ${active && active == idx + 1 && "text-[#FFFFFF]"} text-[#666666]`}>{item.step}</h2>
                      <h3 className={`font-bold text-[24px] leading-8 ${active && active == idx + 1 && "text-[#FFFFFF]"} text-[#7C4EE4]`}>{item.title}</h3> 
                      <p className={`mt-2 font-normal text-[16px] leading-[150%] ${active && active == idx + 1 && "text-[#F7F6FE]"} text-[#666666] max-w-88 max-h-36`}>{item.description}</p>
                      <p className={`mt-8 font-bold text-[14px] leading-[150%] ${active && active == idx + 1 && "text-[#F7F6FE]"} text-[#7C4EE4] underline`}>read more...</p>
                </div>
              })}
      </div>
    </div>
  )
}

export default WorkProcess
