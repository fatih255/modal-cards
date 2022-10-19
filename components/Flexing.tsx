import React from 'react'

export type FlexingProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Flexing({ children }: FlexingProps) {
  return (
    <div className='flex flex-col justify-between max-w-[1440px] mx-auto '>
      <div>{children}</div>
    </div>
  )
}
