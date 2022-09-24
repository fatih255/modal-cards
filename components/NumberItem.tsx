import React from 'react'

type Props = {
    value: string;
    bracketsClassName?: string
}

export default function NumberItem({ value, bracketsClassName = "font-normal" }: Props) {


    const splitting = (value: string) => {

        const [number, ...textarr] = value.split(" ")
        const paranthesesText = textarr.join(' ').match(/\((.*)\)/)?.[0]
        const text = textarr.join(' ').replace(/\((.*)\)/, '')

        return <>
            <span className=" bg-design-gray-200 px-[15px] py-[17px] leading-[0px] rounded-full ">{number}</span>
            <div>
                <span>{text}</span>
                {paranthesesText && <span className={bracketsClassName}>{paranthesesText}</span>}
            </div>
        </>
    };



    return (
        <div className="flex gap-4 items-center font-semibold text-lg tracking-tighter  mt-6 mb-10">
            {splitting(value)}
        </div>
    )
}

