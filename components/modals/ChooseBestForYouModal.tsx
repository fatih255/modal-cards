import Button from 'components/Button'
import ModalLogo from 'components/ModalLogo'
import ModalRadios from 'components/ModalRadios'
import WithModalLayout from 'components/WithModalLayout'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { selectRadioButton } from 'redux/slices/modal'



type Props = {}

export default function ChooseBestForYouModal({ }: Props) {

    const dispatch = useAppDispatch()
    const { contents: { texts, radios }, layout: { colors, logo } } = useAppSelector(state => state.modal)

    return (
        <WithModalLayout>
            <ModalLogo logo={logo} />
            <div className="flex flex-col gap-4 mb-5 pt-2">
                <span className="text-primary leading-[22px] uppercase">{texts[0]}</span>
                <h1 className="title">{texts[1]}</h1>
                <p className="description">{texts[2]}</p>
            </div>
            <ModalRadios returnedValue={(radioIndex) => dispatch(selectRadioButton(radioIndex))} items={radios} />
            <div className="flex gap-3 w-full items-stretch flex-wrap pb-2">
                <Button className="flex-1" theme='light-bordered' size="modal-default" text={texts[3]} />
                <Button className={`${colors} flex-1`} size="modal-default" text={texts[4]} />
            </div>
        </WithModalLayout>
    )
}