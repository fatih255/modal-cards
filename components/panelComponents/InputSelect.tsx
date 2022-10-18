import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import DropdownIcon from 'icons/input-dropdown.svg'
import SelectRemoveIcon from 'icons/select-remove.svg'


type Props = {
    selectAllText?: string
    clearAllText?: string
    closeText?: string
    items: { text: string, value: string, checked: boolean }[],
    placeholder?: string,
    onChange?: (data: string[] | null) => {}
    checked?: boolean
}


function InputSelect({ closeText = "close", clearAllText = "Clear All", selectAllText = "Select All", items, placeholder = 'Select', onChange }: Props) {



    const [checkedItems, setCheckedItems] = useState<{ text: string | null, value: string | null }[]>(items.filter(item => item.checked === true))
    const [activeSelectPanel, setActiveSelectPanel] = useState(false)

    const isFirstRender = useRef(true)
    useEffect(() => {
        if (!isFirstRender.current) {
            const values = checkedItems.map(x => x.value) as string[]
            values.length > 0 && onChange && onChange(values)

        }
        isFirstRender.current = false
     
    }, [checkedItems])

    //Handlers

    const activePanelHandler = () => {
        setActiveSelectPanel(!activeSelectPanel)
    }

    const clearAllHandler = () => {
        document.querySelectorAll('.check-box:checked').forEach((item) => {
            (item as HTMLInputElement).checked = false
        })
        setCheckedItems([])
    }
    const selectAllItemsHandler = () => {
        const allItems = Array.from(document.querySelectorAll('.check-box')).map((item) => {
            const itemElement = item as HTMLInputElement
            if (!itemElement.checked)
                (item as HTMLInputElement).checked = true
            return { text: item.getAttribute('data-text'), value: item.getAttribute('data-value') }
        }).filter(item => (item.text && item.value))

        setCheckedItems(allItems)
    }

    const removeHandler = (value: string | null) => {
        if (!value) return
        setCheckedItems((prevState) => [...prevState.filter(item => item.value !== value)])
        const removeItem = document.querySelector(`.check-box:checked[data-value="${value}"]`) as HTMLInputElement
        removeItem.checked = false
    }

    const checkHandler = (e: React.ChangeEvent<HTMLInputElement>, { text, value }: { text: string, value: string }) => {
        if (e.target.checked)
            setCheckedItems((prevState) => [...prevState, { text, value }])
        if (!e.target.checked)
            setCheckedItems((prevState) => prevState.filter(item => item.value !== value))
    }


    return (
        <div className="relative flex flex-col gap-2 child-font-inter  leading-[18px] text-xs font-normal ">
            {/* selected items and trigger dropdown area */}
            <div className=" default-input  min-h-[38px] p-none cursor-pointer relative flex items-center">
                {
                    !(checkedItems.length > 0) && <span onClick={activePanelHandler} className="text-design-gray-900 w-full h-full default-input-padding">{placeholder}</span>
                }
                {
                    checkedItems.length > 0 && <div className="flex gap-[2px] gap-y-[4px] flex-wrap m-1 mr-10">
                        {
                            checkedItems
                                .map(({ text, value }) => (
                                    <div key={`selected-item-${value}`} className="relative cursor-default flex basis-8 items-center gap-4 px-3 py-[6px] leading-[18px] text-sm rounded-md bg-design-gray-200">
                                        <span className="font-poppins pr-2 z-10">{text}</span>
                                        <div onClick={() => removeHandler(value)} className="group cursor-pointer">
                                            <div className="z-10 flex items-center justify-center absolute inset-0 my-auto ml-auto mr-1 bg-transparent group-hover:bg-design-red-500 rounded-full w-[18px] h-[18px]  ">
                                                <SelectRemoveIcon className="fill-black group-hover:fill-white m-auto" />
                                            </div>
                                            <div className="pointer-events-none trans-300 inset-0 absolute  rounded-md  w-full h-full trans-300 outline outline-transparent outline-[1px] group-hover:bg-white group-hover:outline-design-red-500 " />
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                }
                <div onClick={activePanelHandler} className="flex justify-center items-center absolute inset-0 ml-[90.5%] my-auto h-full w-10">
                    <DropdownIcon />
                </div>
            </div>
            {/* dropdown panel */}
            <div className={cn({ 'opacity-0 -translate-y-[20px] pointer-events-none': !activeSelectPanel, 'translate-y-0': activeSelectPanel },
                "absolute top-full bg-white trans-300 border border-design-gray-500 rounded-md overflow-hidden shadow-select max-w-[260px] z-[110] ")}>
                <ul className="scrollbar-style-1  pt-[14px] max-h-[305px] overflow-y-scroll ">
                    <li className="flex gap-[10px] items-center cursor-pointer mx-5">
                        <input onClick={selectAllItemsHandler} id="select-all" className="check-box w-[18px] h-[18px] my-[6px] " type="checkbox" />
                        <label className="!my-0 !text-xs !leading-[32px] cursor-pointer hover:underline underline-offset-1" htmlFor='select-all'>{selectAllText}</label>
                    </li>
                    <hr className="bg-design-gray-200 my-3 h-[1px] w-[95%] " />
                    {
                        items
                            .map(({ text, value, checked }) => (
                                <li className="flex items-stretch w-full hover:bg-design-gray-100 cursor-pointer px-5 trans-600 bg-white" key={`select-${value}`}>
                                    <input checked={checked} onChange={(e) => checkHandler(e, { text, value })} id={`select-${value}`} data-value={value} data-text={text} className="check-box" type="checkbox" />
                                    <label htmlFor={`select-${value}`} className="!my-0 !text-xs !leading-[32px] w-full h-full pl-[10px]  self-center  cursor-pointer">{text}</label>
                                </li>
                            ))
                    }
                </ul>
                <hr className="bg-design-gray-200 my-4 h-[1px]  w-[95%] " />
                <div className="pb-[10px] flex justify-between my-[6px] mx-5">
                    <button onClick={clearAllHandler} className="hover:underline font-semibold">{clearAllText}</button>
                    <button onClick={activePanelHandler} className="hover:underline ">{closeText}</button>
                </div>
            </div>
        </div>

    )
}
export default React.memo(InputSelect)