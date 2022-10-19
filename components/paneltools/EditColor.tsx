import React from 'react'
import { updateLayout } from 'redux/slices/modal'
import { useAppDispatch } from 'redux/hooks'

//panel components
import { ColorPalette } from 'components/panelComponents'

export default function SelectColor() {
  const dispatch = useAppDispatch()

  return (
    <ColorPalette
      colorPaletteSize={5}
      returnedValue={(data) => dispatch(updateLayout(data))}
    />
  )
}
