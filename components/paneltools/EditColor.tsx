import React from 'react'

//panel components
import { ColorPalette } from 'components/panelComponents'
import { updateLayout } from 'redux/slices/modal'
import { useAppDispatch } from 'redux/hooks'

type Props = {}

export default function SelectColor({ }: Props) {

    const dispatch = useAppDispatch()

    return (
        <ColorPalette colorPaletteSize={5} returnedValue={(data) => dispatch(updateLayout(data))} />
    )
}