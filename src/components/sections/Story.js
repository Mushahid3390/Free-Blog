import React from 'react'
import Button from '../buttons/Button'

const Story = ({slice}) => {
  return (
    <div className='max-w-360  mx-auto mt-50 flex flex-col py-30.75 items-center justify-center bg-[#7C4EE4]'>
      <h2 className='font-bold text-[52px] max-w-3xl text-center leading-12 tracking-[.2px] text-white'>{slice.title}</h2>
      <div className='flex gap-2 itens-center mt-12'>
        <input type='text' placeholder={slice.inputplaceholder} className='w-[320px] bg-[#FFFFFF] text-[#5A7184] rounded-lg py-4.5 pl-5.75 outline-none'/>
        <Button label={slice.button.text} varient={slice.button.variant} style={"!bg-transparent !border-white !text-white text-nowrap"}/>
      </div>
      <p className='mt-6 font-normal text-[16px] leading-7 text-center text-[#BBBBBB] max-w-138.75 text'>{slice.description}</p>
    </div>
  )
}

export default Story
