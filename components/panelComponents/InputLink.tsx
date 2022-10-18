import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'

type Props = {
    onChange?: (value: string) => void
    icon?: JSX.Element

}


export default function InputLink({ onChange, icon }: Props) {


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value)
    }

    return (
        <div className="flex flex-row justify-center items-center">
            <div className="bg-primary rounded-tl-md rounded-bl-md w-10 h-[38px] text-white flex flex-col justify-center items-center translate-x-[2px]">
                {icon && icon}
            </div>
            <input onChange={onChangeHandler} className="default-input !ring-0 !rounded-tl-none !rounded-bl-none " placeholder="Paste Post Request URL" />
        </div>
    )
}