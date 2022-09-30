import React from 'react'
import { useAppSelector } from 'redux/hooks'
import Button from 'components/Button'
import WithModalLayout from 'components/WithModalLayout'
import ModalLogo from 'components/ModalLogo'

type Props = {}

export default function DeleteYourProfileModal({ }: Props) {

    const { contents: { texts }, layout: { colors} } = useAppSelector(state => state.modal)

    const informationTextGenerate = (str: string) => {
        const txt = str.split(/(\*(.*)\*)/g).filter((x) => !x.includes("*"))
        return <>
            {txt[0]}
            <span className="text-black font-normal">{txt[1]}</span>
            {txt[2]}
        </>
    }


    return <WithModalLayout>

        <ModalLogo />

        <h1 className="title">{texts[0]}</h1>
        <p className="description">{texts[1]}</p>
        <p className="px-[15%] text-design-gray-900 leading-[19.36px]">{informationTextGenerate(texts[2])}</p>
        <div className="flex flex-col gap-3 w-full items-stretch flex-wrap">
            <Button className={`${colors.bg} flex-1`} size="modal-default" text={texts[3]} />
            <Button className="flex-1" theme='light-bordered' size="modal-default" text={texts[4]} />
        </div>
    </WithModalLayout>
}
