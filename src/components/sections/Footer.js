import { PrismicNextImage } from '@prismicio/next'
import { PrismicImage } from '@prismicio/react'
import Link from 'next/link'
import React from 'react'

const Footer = ({footerContent}) => {
  return (
    <div className='mx-auto max-w-360 flex flex-col gap-10 py-13.5 items-center bg-[#FFFFFF]'>
      <PrismicNextImage field={footerContent.data.logo}/>
      {footerContent?.data?.menu && (
        <div className='flex gap-11.5 text-[16px] font-normal leading-[150%]'>
            {footerContent?.data?.menu?.map((item) => {
                return (
                    <Link key={item.link.key} href="/#">{item.link.text}</Link>
                );
            })}
        </div>
      )}

      {footerContent?.data?.social_media && (
        <div className='flex gap-4'>
            {footerContent?.data?.social_media?.map((icon) => {
                return <PrismicNextImage key={icon.icon.id} field={icon.icon}/>
            })}
        </div>
      )}
      <hr className='w-full border-[#7C4EE4]'/>
      <p className='font-normal text-[16px] leading-[150%] text-[#150E06]'>{footerContent.data.copy_rights}</p>

    </div>
  )
}

export default Footer
