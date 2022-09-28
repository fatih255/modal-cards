import React from 'react'
import SecurityCodeIcon from 'icons/modal/security-code.svg'
import { useAppSelector } from 'redux/hooks'
import Button from 'components/Button'
import Input from 'components/Input'
import cn from 'classnames'
import WithModalLayout from 'components/WithModalLayout'
import ModalLogo from 'components/ModalLogo'

type Props = {}

export default function SecurityCodeModal({ }: Props) {

    const { contents: { texts }, layout: { colors, logo } } = useAppSelector(state => state.modal)


    return <WithModalLayout>

        <ModalLogo
            ifNotLogoJSX={
                <>
                    <SecurityCodeIcon className={`${colors} z-20 p-[24%] aspect-square `} />
                    <div className={`absolute inset-0 bg-primary rounded-full z-10 ${colors} `}></div>
                </>
            }
            logo={logo} />

        <h1 className="title">{texts[0]}</h1>
        <p className="description ">{texts[1]}</p>
        <Input placeholder={texts[2]} />
        <div className="flex gap-3 w-full items-stretch flex-wrap">
            <Button className={`${colors} flex-1`} size="modal-default" text={texts[3]} />
            <Button className="flex-1" theme='light-bordered' size="modal-default" text={texts[4]} />
        </div>
    </WithModalLayout>
}
