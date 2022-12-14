import React, { useState } from 'react'
import cn from 'classnames'

export type SelectPositionProps = {
  returnedValue?: (data: { name: string; value: string | object }) => void
}

export default function SelectPosition({ returnedValue }: SelectPositionProps) {
  const [selectedPosition, setSelectedPosition] = useState('pos-mc')
  const positions = [
    'pos-tl',
    'pos-tc',
    'pos-tr',
    'pos-ml',
    'pos-mc',
    'pos-mr',
    'pos-bl',
    'pos-bc',
    'pos-br',
  ] // as well as position classes
  //positions:top-left, top-center, top-right, middle-left, middle-center, middle-right, bottom-left, bottom-center, bottom-right

  const selectPositionHandler = (value: string) => {
    returnedValue && returnedValue({ name: 'position', value: value })
    setSelectedPosition(value)
  }

  const PositionBox = ({ value }: { value: string }) => {
    return (
      <div
        onClick={() => selectPositionHandler(value)}
        className={cn(
          { '!bg-primary': value === selectedPosition },
          `${value} border hover:border-primary hover:bg-primary trans-300 border-design-gray-500 w-[24px] h-[15px] cursor-pointer`,
        )}
      />
    )
  }

  return (
    <div className='grid grid-rows-3 grid-cols-3 gap-[5px] max-w-[82px]'>
      {positions.map((pos) => (
        <PositionBox
          key={pos}
          value={pos}
        />
      ))}
    </div>
  )
}
