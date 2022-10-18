import React from 'react'
import CheckIcon from 'icons/check.svg'


export type CheckListProps = {
    texts: string[],
    className?: string
}

 function CheckList({ texts, className }: CheckListProps) {
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

export default React.memo(CheckList)