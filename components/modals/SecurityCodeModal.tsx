import React from 'react'
import { useAppSelector } from 'redux/hooks'
import Button from 'components/Button'
import InputTextModal from 'components/InputTextModal'
import WithModalLayout from 'components/WithModalLayout'
import ModalLogo from 'components/ModalLogo'
import { shallowEqual } from 'react-redux'

type Props = {}

export default function SecurityCodeModal({ }: Props) {

    const { texts, colors } = useAppSelector(state => Object(
        {
            texts: state.modal.contents.texts,
            image: state.modal.contents.image,
            colors: state.modal.layout.colors,
        }), shallowEqual)

    return <WithModalLayout>

        <ModalLogo />

        <h1 className="title">{texts[0]}</h1>
        <p className="description ">{texts[1]}</p>
        <InputTextModal placeholder={texts[2]} />
        <div className="flex gap-3 w-full items-stretch flex-wrap">
            <Button className={`${colors.bg} flex-1`} size="modal-default" text={texts[3]} />
            <Button className="flex-1" theme='light-bordered' size="modal-default" text={texts[4]} />
        </div>
    </WithModalLayout>
}
