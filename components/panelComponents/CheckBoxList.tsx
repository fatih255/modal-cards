import React, { useEffect, useState } from 'react'

type Props = {
    items: { text: string, value: string }[]
    returnedValue?: (data: string[]) => void
}

export default function CheckBoxList({ items, returnedValue }: Props) {

    const [checkedItems, setCheckedItems] = useState<string[]>([])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {

        if (e.target.checked) setCheckedItems(prevState => [...prevState, value])
        if (e.target.checked) setCheckedItems(prevState => prevState.filter(itemValue => itemValue !== value))
    }

    useEffect(() => {
        returnedValue && returnedValue(checkedItems)
    }, [checkedItems])

    return (
        <div className="flex flex-col  gap-[15px] mt-[15px]">
            {
                items.map(({ text, value }) => (
                    <div key={`checkbox-list-select-${value}`} className="flex gap-[10px] items-stretch child-font-poppins">
                        <input onChange={(e) => onChangeHandler(e, value)} id={`checkbox-list-select-${value}`} data-value={value} className=" before:!top-[-5px] checkbox-color-primary check-box w-[18px] h-[18px] my-[6px] " type="checkbox" />
                        <label htmlFor={`checkbox-list-select-${value}`} className="cursor-pointer !font-normal !m-0 self-center leading-[18px]">{text}</label>
                    </div>
                ))}
        </div>
    )
}