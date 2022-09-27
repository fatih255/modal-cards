import React from 'react'
import Button from 'components/Button'
import { useAppSelector } from 'redux/hooks'
import WithModalLayout from 'components/WithModalLayout'


type Props = {}

export default function InstallLocalNowModal({ }: Props) {

    const { ModalProps: { content, image }, LayoutProps: { colors } } = useAppSelector(state => state.modal)
    return (
        <WithModalLayout>
            <div>
                <h1 className="title content-1">{content[0]}</h1>
                <p className="description content-2">{content[1]}</p>
                <img  src="images/install-local-now.png" />
                <div className="flex gap-3 w-full items-stretch flex-wrap">
                    <Button className={`${colors} flex-1`} size="modal-default" text={content[2]} />
                    <Button className="flex-1" theme='light-bordered' size="modal-default" text={content[3]} />
                </div>
            </div>
        </WithModalLayout>

    )
}