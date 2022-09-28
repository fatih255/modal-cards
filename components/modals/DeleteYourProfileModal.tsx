import React from 'react'
import TrashIcon from 'icons/modal/trash.svg'
import { useAppSelector } from 'redux/hooks'
import Button from 'components/Button'
import Input from 'components/Input'
import cn from 'classnames'
import WithModalLayout from 'components/WithModalLayout'

type Props = {}

export default function DeleteYourProfileModal({ }: Props) {

    const { ModalProps: { content: { texts }, image }, LayoutProps: { colors } } = useAppSelector(state => state.modal)

    const informationTextGenerate = (str: string) => {
        const txt = str.split(/(\*(.*)\*)/g).filter((x) => !x.includes("*"))
        return <>
            {txt[0]}
            <span className="text-black font-normal">{txt[1]}</span>
            {txt[2]}
        </>
    }
    return <WithModalLayout>
        <div className={cn('w-[32%] relative  max-w-md rounded-full flex justify-center items-center overflow-hidden ')}>
            {
                image ? <img className="w-[100%] h-[100%] object-cover" src={image} /> : <>
                    <TrashIcon className={`${colors} z-20 p-[32%] aspect-square `} />
                    <div className={`absolute inset-0 bg-primary rounded-full z-10 ${colors} `}></div>
                </>
            }
        </div>
        <h1 className="title">{texts[0]}</h1>
        <p className="description">{texts[1]}</p>
        <p className="px-[15%] text-design-gray-900 leading-[19.36px]">{informationTextGenerate(texts[2])}</p>
        <Input placeholder={texts[3]} />
        <div className="flex flex-col-reverse gap-3 w-full items-stretch flex-wrap">
            <Button className="flex-1" theme='light-bordered' size="modal-default" text={texts[4]} />
            <Button className={`${colors} flex-1`} size="modal-default" text={texts[5]} />
        </div>
    </WithModalLayout>
}
