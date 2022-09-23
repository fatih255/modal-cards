import React from 'react'

type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function Flexing({ children }: Props) {
    return (
        <div className="flex flex-col justify-between max-w-[1440px] mx-auto ">
            <div>
                {children}
            </div>
        </div>
    )
}