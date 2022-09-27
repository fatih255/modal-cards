import React from 'react'
import SecurityCodeIcon from 'icons/modal/security-code.svg'
import { useAppSelector } from 'redux/hooks'
import Button from 'components/Button'
import Input from 'components/Input'
import cn from 'classnames'
import WithModalLayout from 'components/WithModalLayout'

type Props = {}

export default function SecurityCodeModal({ }: Props) {

    const { ModalProps: { content, image }, LayoutProps: { colors } } = useAppSelector(state => state.modal)


    return <WithModalLayout>
        <div className={cn({ 'h-[22%]': !image }, 'relative w-[24%]  max-w-md rounded-full flex justify-center items-center overflow-hidden')}>
            {
                image ? <img className="w-[100%] h-[100%] object-cover" src={image} /> : <>
                    <SecurityCodeIcon className={`${colors} z-20 w-[60%] h-[60%]`} />
                    <div className={`absolute top-0 left-0 w-full h-full bg-primary rounded-full z-10 ${colors} `}></div>
                </>
            }
        </div>
        <h1 className="title content-1">{content[0]}</h1>
        <p className="description content-2">{content[1]}</p>
        <Input className="content-3" placeholder={content[2]} />
        <div className="flex gap-3 w-full items-stretch flex-wrap">
            <Button className={`${colors} flex-1`} size="modal-default" text={content[3]} />
            <Button className="flex-1" theme='light-bordered' size="modal-default" text={content[4]} />
        </div>
    </WithModalLayout>
}
