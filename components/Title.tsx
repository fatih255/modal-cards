import React from 'react'

type Props = {
    children: string
    className?: string
}

export default function Title({ children, className = "" }: Props) {
    return (
        <h2 className={`mb-4 text-4xl font-semibold tracking-tighter ${className}`}>{children}</h2>

    )
}
