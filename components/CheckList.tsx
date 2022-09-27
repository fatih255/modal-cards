import React from 'react'
import CheckIcon from 'icons/check.svg'
type Props = {
    texts: string[],
    className?: string
}

export default function CheckList({ texts, className }: Props) {
    return (
        <div className={`flex gap-4 ${className ?? ''}`}>
            {
                texts.map((text, index) => (
                    <div key={index + text} className="flex items-center gap-2">
                        <CheckIcon />
                        {text}
                    </div>
                ))
            }
        </div>
    )
}