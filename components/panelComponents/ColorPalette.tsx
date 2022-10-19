import React from 'react'

/*
----component explain:   
    Select Colors  -- colorPaletteSize generate colors like modal-color-bg/text-[1,2,3, .... n] 
    colors take from  colorpalettegenerator on modal.scss file
*/

export type ColorPaletteProps = {
  colorPaletteSize: number
  returnedValue?: (data: { name: string; value: string | object }) => {}
}

export default function ColorPalette({
  colorPaletteSize,
  returnedValue,
}: ColorPaletteProps) {
  const selectColorHandler = (index: number) => {
    returnedValue &&
      returnedValue({
        name: 'colors',
        value: {
          bg: `modal-bg-color-${index}`,
          text: `modal-text-color-${index}`,
        },
      })
  }

  return (
    <div className='flex gap-[10px] items-center hover-grow-all'>
      {Array.from({ length: colorPaletteSize }).map((_, index) => (
        <div
          key={`color-${index + 1}`}
          onClick={() => selectColorHandler(index + 1)}
          className={`modal-bg-color-${
            index + 1
          } w-[42px] h-[42px] rounded-[10px] !outline-none border border-black border-opacity-30 cursor-pointer box-border`}
        />
      ))}
    </div>
  )
}
