import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { updateLayout } from 'redux/slices/modal'


//panel components 
import { RadioButton } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'

type Props = {}

export default function ChangeModalSize({ }: Props) {

    const modalSize = useAppSelector(state => (state.modal.layout.size), shallowEqual)
    const dispatch = useAppDispatch()



    return (
        <RadioButton
            returnedValue={(value) => dispatch(updateLayout({ name: 'size', value: value }))}
            defaultValue={modalSize}
            options={
                [
                    { text: "Small", value: "small" },
                    { text: "Medium", value: "medium" },
                    { text: "Large", value: "large" },
                ]
            } />
    )
}