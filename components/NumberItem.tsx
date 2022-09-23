import React from 'react'

type Props = {
    value: string;
}

export default function NumberItem({ value }: Props) {

    const splitting = (value: string) => {
        const str = value.split(" ");
        str.shift();
        return [value[0], str.join(" ")];
    };

    const [number, text] = splitting(value);
    
    return (
        <div className="flex gap-4 items-center font-semibold text-lg tracking-tighter  my-6">
            <span className="bg-design-gray-200 px-[15px] py-[17px] leading-[0px] rounded-full ">{number}</span>
            <span>{text}</span>
        </div>
    )
}

