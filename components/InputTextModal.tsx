import React from 'react'

type Props = {
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
    className?: string
}

export default function InputTextModal({ type = 'text', placeholder = '', className = '' }: Props) {
    return (
        <input
            className={`input ${className}`}
            placeholder={placeholder}
            type={type} />
    )
}