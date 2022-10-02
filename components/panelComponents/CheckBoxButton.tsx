import React, { useState } from 'react'
import cn from 'classnames'

type Props = {
    items: { text: string, value: string, icon?: JSX.Element, checked?: boolean }[]
    returnedValue?: (data: string) => void
}

export default function CheckBoxButton({ items, returnedValue }: Props) {

    const [checkedItem, setcheckedItem] = useState<string>(items.find(item => item.checked === true)?.value ?? '')

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
        if (e.target.checked) setcheckedItem(value)
        returnedValue && returnedValue(checkedItem)
    }






    return (
        <div className="flex gap-5">
            {
                items.map(({ text, value, icon }) => (
                    <div key={`checkbox-btn-${value}`} className="pl-[15px] cursor-pointer trans-300 flex items-center w-full font-poppins text-sm bg-design-gray-100 rounded-xl">
                        <input checked={checkedItem.includes(value)}
                            onChange={(e) => onChangeHandler(e, value)} id={value} className="checkbox-color-primary check-box-btn w-[18px] h-[18px] my-[6px] before:!top-[-2px]"
                            type="checkbox" />
                        <div className={cn(" child-all-trans-400 pointer",
                            {
                                'fill-all-primary': checkedItem.includes(value),
                                'fill-all-gray': !checkedItem.includes(value)
                            })
                        }>

                        </div>
                        <label className="flex justify-start items-center !my-0 py-[15px] w-full h-full pl-[10px] cursor-pointer" htmlFor={value}>
                            <div className="pr-[9px]">
                                {icon && icon}
                            </div>
                            {text}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}