import React from 'react'

type Props = {
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
}

export default function Input({ type = 'text', placeholder = '' }: Props) {
    return (
        <input
            className="input"
            placeholder={placeholder}
            type={type} />
    )
}