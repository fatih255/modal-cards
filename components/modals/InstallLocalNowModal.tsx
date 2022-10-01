import React from 'react'
import Button from 'components/Button'
import { useAppSelector } from 'redux/hooks'
import WithModalLayout from 'components/WithModalLayout'
import { shallowEqual } from 'react-redux'


type Props = {}

export default function InstallLocalNowModal({ }: Props) {

    const { texts, image, colors } = useAppSelector(state => Object(
        {
            texts: state.modal.contents.texts,
            image: state.modal.contents.image,
            colors: state.modal.layout.colors,
        }), shallowEqual)

    return (
        <WithModalLayout>
            <img src={image} className="w-full object-cover " />
            <div className="inner">
                <h1 className="title">{texts[0]}</h1>
                <p className="description">{texts[1]}</p>
                <div className="flex flex-col gap-3 w-full items-stretch ">
                    <Button className={`${colors.bg} flex-1`} size="modal-default" text={texts[2]} />
                    <Button className="flex-1" theme='light-bordered' size="modal-default" text={texts[3]} />
                </div>
            </div>
        </WithModalLayout>

    )
}