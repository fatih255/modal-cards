import React from 'react'
import { useAppDispatch } from 'redux/hooks'
import { updateLayout } from 'redux/slices/modal'

//panel components 
import { RadioButton } from 'components/panelComponents'

type Props = {}

export default function ChangeModalSize({ }: Props) {

    const dispatch = useAppDispatch()

    return (
        <RadioButton
            returnedValue={(value) => dispatch(updateLayout({ name: 'size', value: value }))}
            options={
                [
                    { text: "Small", value: "small" },
                    { text: "Medium", value: "medium" },
                    { text: "Large", value: "large" },
                ]
            } />
    )
}