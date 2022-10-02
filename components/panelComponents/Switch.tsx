import React, { useState } from 'react'
import cn from 'classnames'

type Props = {
    text: string
    className?: string
}

export default function Switch({ text, className = '' }: Props) {

    const [active, setActive] = useState(false)

    const onClickHandler = () => {
        setActive(!active)
    }
    return (
        <div className={` flex w-full justify-between items-center mb-[15px] mt-[30px] ${className} `}>
            <label className="h-[18px] !font-poppins self-start !m-0 leading-[18px] tracking-[-3%] font-semibold">{text}</label>
            <div onClick={onClickHandler} className="cursor-pointer hover-ring-high  relative bg-primary rounded-[160px]  w-[33px] h-[18px] overflow-hidden">
                <div className="absolute w-full h-full border-[3px] trans-300  border-primary " >
                    <div className={cn({ 'actived-switch': active }, 'right-0 trans-300 ease-linear absolute bg-white w-3 h-3 inset-y-0  rounded-full')} />
                </div>
            </div>
        </div>
    )
}