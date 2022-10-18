import React, { useState } from 'react'

export type CheckBoxListProps = {
    items: { text: string, value: string, checked?: boolean }[]
    returnedValue?: (data: any) => void
}

export default function CheckBoxList({ items, returnedValue }: CheckBoxListProps) {

    const [checkedItems, setCheckedItems] = useState<string[]>(items.filter(item => item.checked === true).map(item => item.value))


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {

        if (e.target.checked) setCheckedItems(prevState => [...prevState, value])
        if (!e.target.checked) setCheckedItems(prevState => prevState.filter(itemValue => itemValue !== value))

        returnedValue && returnedValue({ name: e.target.getAttribute('data-value'), value: e.target.checked })
    }

    return (
        <div className="flex flex-col  gap-[15px] mt-[15px]">
            {
                items.map(({ text, value }, i) => (
                    <div key={`checkbox-list-select-${value}`} className="flex gap-[10px] items-stretch child-font-poppins">
                        <input id={`checkbox-list-select-${i}`} checked={checkedItems.includes(value)} onChange={(e) => onChangeHandler(e, value)} data-value={value} className=" before:!top-[-5px] checkbox-color-primary w-[18px] h-[18px] my-[6px] " type="checkbox" />
                        <label htmlFor={`checkbox-list-select-${i}`} className="cursor-pointer !font-normal !m-0 self-center leading-[18px]">{text}</label>
                    </div>
                ))}
        </div>
    )
}