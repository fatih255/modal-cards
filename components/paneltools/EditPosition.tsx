import React from 'react'
import { useAppDispatch } from 'redux/hooks'
import { updateLayout } from 'redux/slices/modal'


//panel components
import { SelectPosition } from 'components/panelComponents'


type Props = {}

export default function EditPosition({ }: Props) {

    const dispatch = useAppDispatch()
    return (
        <SelectPosition returnedValue={(data) => dispatch(updateLayout(data))} />
    )
}