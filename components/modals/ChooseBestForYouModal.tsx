import Button from 'components/Button'
import ModalLogo from 'components/ModalLogo'
import ModalRadios from 'components/ModalRadios'
import WithModalLayout from 'components/WithModalLayout'
import React from 'react'
import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { selectRadioButton } from 'redux/slices/modal'



type Props = {}

export default function ChooseBestForYouModal({ }: Props) {

    const dispatch = useAppDispatch()
    const { texts, colors, radios } = useAppSelector(state => Object(
        {
            radios: state.modal.contents.radios,
            texts: state.modal.contents.texts,
            colors: state.modal.layout.colors,
        }), shallowEqual)

    return (
        <WithModalLayout>
            <ModalLogo />
            <div className="flex flex-col gap-4 mb-5 pt-2">
                <span className={`${colors.text} leading-[22px] uppercase`}>{texts[0]}</span>
                <h1 className="title">{texts[1]}</h1>
                <p className="description">{texts[2]}</p>
            </div>
            <ModalRadios colors={colors} returnedValue={(radioIndex) => dispatch(selectRadioButton(radioIndex))} items={radios} />
            <div className="flex gap-3 w-full items-stretch flex-wrap pb-2">
                <Button className="flex-1" theme='light-bordered' size="modal-default" text={texts[3]} />
                <Button className={`${colors.bg} flex-1`} size="modal-default" text={texts[4]} />
            </div>
        </WithModalLayout>
    )
}