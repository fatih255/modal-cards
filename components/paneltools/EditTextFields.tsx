import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { updateModalContentText } from 'redux/slices/modal'
import { shallowEqual } from 'react-redux'


//panel components
import { InputText } from 'components/panelComponents'


type Props = {}

export default function EditTextFields({ }: Props) {

    const dispatch = useAppDispatch()
    const texts = useAppSelector(state => state.modal.contents.texts, shallowEqual)

    const onContentTextChangeHandler = (ContentIndex: string | number, ContentText: string) => {
        dispatch(updateModalContentText({ ContentIndex, ContentText }))
    }


    return (
        <>
            {
                texts && texts.map((text: string, index: string | number) =>
                    <InputText onChange={async (value) => onContentTextChangeHandler(index, value)}
                        key={`text-content-${index}`} text={text} />)
            }
        </>
    )
}
