import React from 'react'
import FooterLogo from 'icons/footerlogo.svg'


type Props = {}

export default function Footer({ }: Props) {
  return (
    <div className="my-[80px] flex flex-col justify-center items-center">
      <FooterLogo />
      <span className="leading-[] tracking-[-1%] text-sm  text-center mt-[15px]">Powered by Popupsmart</span>
    </div>
  )
}