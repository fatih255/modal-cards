import React from 'react'

export type ButtonProps = {
  text: string | JSX.Element
  theme?: 'light' | 'primary' | 'primary-light' | 'light-bordered'
  size?: 'small' | 'large' | 'medium' | 'modal-default'
  shadow?: boolean
  className?: string
  id?: string
} & React.DOMAttributes<HTMLButtonElement>

export default function Button({
  text,
  theme = 'primary',
  size = 'small',
  shadow = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${getClass(
        theme,
        size,
        shadow,
      )} hover:bg-opacity-80 transition-all duration-300  font-inter self-center ${
        className ?? ''
      } `}
      {...props}>
      {text}
    </button>
  )
}

const getClass = (
  theme: ButtonProps['theme'],
  size: ButtonProps['size'],
  shadow: boolean,
) => {
  let themeClass = ''
  switch (theme) {
    case 'primary':
      themeClass = 'bg-primary text-white hover:bg-opacity-85 '
      break
    case 'primary-light':
      themeClass =
        'bg-white text-primary bg-white  border border-gray-100 hover:border-gray-200 hover:!text-white hover:!bg-opacity-100 hover:!bg-primary hover:!border-primary hover:shadow-lg'
      break
    case 'light':
      themeClass =
        'bg-white text-black bg-primary  border border-gray-100 hover:border-gray-200 '
      break
    case 'light-bordered':
      themeClass =
        'bg-white text-black bg-primary  outline outline-[1px] outline-gray-200 hover:outline-gray-400 border-none'
      break
  }
  switch (size) {
    case 'small':
      themeClass += ' px-5 py-1 rounded-xl'
      break
    case 'medium':
      themeClass += ' px-6 py-3 rounded-xl'
      break
    case 'large':
      themeClass += ' px-7 py-4 rounded-xl'
      break
    case 'modal-default':
      themeClass += ' px-7 py-[11px] rounded-lg'
      break
  }

  if (shadow) themeClass += ' drop-shadow-primary '

  return themeClass
}
