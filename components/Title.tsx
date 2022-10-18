import React from 'react'

export type TitleProps = {
    children: string
    className?: string
}

export default function Title({ children, className = "" }: TitleProps) {
    return (
        <h2 className={`mb-4 text-4xl font-semibold tracking-tighter ${className}`}>{children}</h2>

    )
}
