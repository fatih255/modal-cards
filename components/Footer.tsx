import React from 'react'
import FooterLogo from 'icons/footerlogo.svg'

export type FooterProps = {
  text?: string
}

export default function Footer({ text }: FooterProps) {
  return (
    <div className='my-[80px] flex flex-col justify-center items-center'>
      <FooterLogo />
      <span className='leading-[] tracking-[-1%] text-sm  text-center mt-[15px]'>
        {text}
      </span>
    </div>
  )
}
