import React, { useState } from 'react'
import cn from 'classnames'

export type RadioButtonProps = {
  options: { text: string; value: string }[]
  returnedValue: (data: string) => {}
  defaultValue?: string
}

export default function RadioButton({
  options,
  returnedValue,
  defaultValue,
}: RadioButtonProps) {
  const [selectedOptionValue, setSelectedOptionValue] = useState(
    defaultValue ??
      (options.length % 2 === 0 ? options[0].value : options[1].value),
  )

  const selectOptionHandler = (value: string) => {
    setSelectedOptionValue(value)
    returnedValue(value)
  }
  return (
    <div className='flex flex-row bg-design-gray-100 rounded-xl '>
      {options.map(({ text, value }, index) => (
        <button
          key={`radio-${index}-${value}`}
          onClick={() => selectOptionHandler(value)}
          className={cn(
            { 'bg-white !text-black ': selectedOptionValue === value },
            'h-[44px] px-6 my-1 mx-1 font-inter font-semibold text-sm  text-design-gray-900 trans-400 rounded-xl leading-[18px] ',
          )}>
          {text}
        </button>
      ))}
    </div>
  )
}
