import React, { useState } from 'react'
import cn from 'classnames'
//icons
import PlusIcon from 'icons/plus.svg'
import MinusIcon from 'icons/minus.svg'


type Props = {
    items: { title: string, description: string }[]
}

export default function Accordion({ items }: Props) {

    const [activeItemIndex, setActiveItemIndex] = useState<null | number>(null)

    const onClickHandler = (activeIndex: number | null = null) => setActiveItemIndex(activeIndex)


    return (
        <div>
            {
                items.map(({ title, description }, index) => (
                    <div key={`accordion-${title}-${index}`} className={cn({ 'bg-design-gray-100': activeItemIndex === index }, 'trans-400 border-t  border-design-gray-200 py-[25px] px-[30px]')}>
                        <div className="flex justify-between">
                            <span className={cn({ '!text-black': activeItemIndex === index }, 'mb-[20px] trans-200 font-semibold tracking-[-1%] text-lg text-design-gray-900  leading-[24px]')}>
                                {title}
                            </span>
                            <div className="cursor-pointer hover:scale-105 trans-300 origin-center">
                                {activeItemIndex === index && <MinusIcon onClick={() => onClickHandler(null)} />}
                                {activeItemIndex !== index && <PlusIcon onClick={() => onClickHandler(index)} />}
                            </div>
                        </div>
                        <p className={cn({ '!max-h-[500px] !opacity-100 ': activeItemIndex === index, 'hidden ': activeItemIndex !== index },
                            'transition-[max-height,opacity] max-w-[67%] opacity-0 max-h-0 duration-400  overflow-clip origin ease-out font-normal text-base tracking-[-1%] leading-[26px]')}>
                            {description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
