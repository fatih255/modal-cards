import React, { useRef } from 'react'
import cn from 'classnames'

type Props = {
    value: string;
    bracketsClassName?: string
    className?: string
}

function NumberItem({ value, className = '', bracketsClassName = "font-normal" }: Props) {

    const [number, ...textarr] = value.split(" ")
    const paranthesesText = textarr.join(' ').match(/\((.*)\)/)?.[0]
    const text = textarr.join(' ').replace(/\((.*)\)/, '')




    return (
        <>
            <div className={` flex gap-4 items-center font-semibold text-lg tracking-tighter   mb-12 mt-10 ${className} `}>
                <span className=" bg-design-gray-200 px-[15px] py-[17px] leading-[0px] rounded-full ">{number}</span>
                <div>
                    <span>{text}</span>
                    {paranthesesText && <span className={bracketsClassName}>{paranthesesText}</span>}
                </div>
            </div>

        </>
    )
}

export default React.memo(NumberItem)