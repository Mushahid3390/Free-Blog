import React from 'react'

const btnVarient = {
    primary: "px-12 py-2 rounded-xl text-[16px] font-semibold leading-[150%] bg-linear-to-b text-white from-[#956ef0] to-[#7C4EE4] active:scale-99 active:scale-98 cursor-pointer",
    secondary: "px-12 py-4 bg-white rounded-[8px] shadow-[1px_1px_16px_#00000017] text-[14px] text-[#333333] font-bold leading-[150%] active:scale-98 cursor-pointer",
    outline: "px-12 px py-4 bg-white rounded-[8px] shadow-[1px_1px_16px_#00000017] border-[1px] border-[#04091E] font-semibold leading-[150%] text-[16px] text-[#333333] active:scale-98 cursor-pointer",
    ghost: "px-12 py-4 rounded-[8px] bg-[#FAFAFA] font-semibold leading-[150%] text-[16px] text-[#333333] active:scale-98 cursor-pointer"
}

const Button = ({label, onClick, type, style, varient="ghost"}) => {
  return (
    <button
       type={type}
       onClick={onClick}
       className={`${btnVarient[varient]} ${style}`} 
    >{label}</button>
  )
}

export default Button
