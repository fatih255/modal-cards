import React, { useEffect, useState } from 'react'
import cn from 'classnames'

type Props = {
    items: { text: string, value: string, icon?: JSX.Element }[]
    returnedValue?: (data: string[]) => void
}

export default function CheckBoxButton({ items, returnedValue }: Props) {

    const [checkedItems, setCheckedItems] = useState<string[]>([])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {

        if (e.target.checked) setCheckedItems(prevState => [...new Set([...prevState, value])])
        if (!e.target.checked) setCheckedItems(prevState => prevState.filter(itemValue => itemValue !== value))

    }

    useEffect(() => {
        returnedValue && returnedValue(checkedItems)
    }, [checkedItems])

    return (
        <div className="flex gap-5">
            {
                items.map(({ text, value, icon }) => (
                    <div key={`checkbox-btn-${value}`} className="pl-[15px] cursor-pointer trans-300 flex items-center w-full font-poppins text-sm bg-design-gray-100 rounded-xl">
                        <input
                            onChange={(e) => onChangeHandler(e, value)} id={value} className="checkbox-color-primary check-box w-[18px] h-[18px] my-[6px] before:!top-[-2px]"
                            type="checkbox" />
                        <div className={cn("pl-[10px] child-all-trans-400",
                            {
                                'fill-all-primary': checkedItems.includes(value),
                                'fill-all-gray': !checkedItems.includes(value)
                            })
                        }>
                            {icon && icon}
                        </div>
                        <label className="!my-0 py-[15px] w-full h-full pl-[5px] cursor-pointer" htmlFor={value}>{text}</label>
                    </div>
                ))
            }
        </div>
    )
}