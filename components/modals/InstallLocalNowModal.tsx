import React from 'react'
import Button from 'components/Button'
import { useAppSelector } from 'redux/hooks'
import WithModalLayout from 'components/WithModalLayout'


type Props = {}

export default function InstallLocalNowModal({ }: Props) {

    const { ModalProps: { content: { texts }, image }, LayoutProps: { colors } } = useAppSelector(state => state.modal)
    return (
        <WithModalLayout>
            <img src="images/install-local-now.png" className="w-full object-cover " />
            <div className="inner">
                <h1 className="title">{texts[0]}</h1>
                <p className="description">{texts[1]}</p>
                <div className="flex flex-col gap-3 w-full items-stretch ">
                    <Button className={`${colors} flex-1`} size="modal-default" text={texts[2]} />
                    <Button className="flex-1" theme='light-bordered' size="modal-default" text={texts[3]} />
                </div>
            </div>
        </WithModalLayout>

    )
}