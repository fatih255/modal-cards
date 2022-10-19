import React, { useState } from 'react'
import { ModalType } from 'redux/slices/modal'
import cn from 'classnames'

export type ModalRadiosProps = {
  items?: ModalType['contents']['radios']
  colors: ModalType['layout']['colors']
  returnedIndex?: (index: number) => {}
}

export default function ModalRadios({
  items,
  colors,
  returnedIndex,
}: ModalRadiosProps) {
  const [selectedIndex, setselectedIndexIndex] = useState<null | number>(null)

  const selectHandler = (index: number) => {
    returnedIndex && returnedIndex(index)
    setselectedIndexIndex(index)
  }

  return (
    <div className='flex gap-8 flex-col justify-center items-start modal-radio-container'>
      {items &&
        items.map(({ title, description }, index) => (
          <div
            key={`radio-${index}`}
            onClick={() => selectHandler(index)}
            className={cn(
              { 'opacity-[.63]': selectedIndex !== index },
              'trans-300 radio-item cursor-pointer hover:opacity-100 group  flex gap-[10.5px] justify-center items-center',
            )}>
            <div
              className={cn(
                { selected: selectedIndex === index },
                ` ${colors.bg} radio `,
              )}>
              <div className={`inset-0 w-full h-full `}>
                <div
                  className={cn(
                    { 'scale-[.4] ': selectedIndex === index },
                    ' w-full h-full trans-400 inset-0 m-auto absolute bg-white rounded-full',
                  )}></div>
              </div>
            </div>
            <div className='flex flex-col items-start gap-[10px] -translate-y-1'>
              <label className='!text-lg leading-[21.78px] font-medium m-none h-[22px] cursor-pointer '>
                {title}
              </label>
              <p className='text-sm text-[#717791] leading-[16.94px]'>
                {description}
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}
