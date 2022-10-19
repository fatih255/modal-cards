import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { BsSignpost } from 'react-icons/bs'

export const InputLinkIcons = {
  BsSignpost: <BsSignpost />,
  AiOutlineLink: <AiOutlineLink />,
}

export type InputLinkProps = {
  onChange?: (value: string) => void
  iconName?: 'BsSignpost' | 'AiOutlineLink'
  placeholder?: string
}

export default function InputLink({
  onChange,
  iconName = 'AiOutlineLink',
  placeholder = 'Paste Post Request URL',
}: InputLinkProps) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value)
  }

  return (
    <div className='flex flex-row justify-center items-center'>
      <div className='bg-primary rounded-tl-md rounded-bl-md w-10 h-[38px] text-white flex flex-col justify-center items-center translate-x-[2px]'>
        {iconName && InputLinkIcons[iconName]}
      </div>
      <input
        onChange={onChangeHandler}
        className='default-input !ring-0 !rounded-tl-none !rounded-bl-none '
        placeholder={placeholder}
      />
    </div>
  )
}
