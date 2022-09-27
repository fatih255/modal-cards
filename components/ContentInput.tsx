import React from 'react'

type Props = {
    text: string,
    onChange: (value:string)=>{}
}


export default function ContentInput({ text, onChange }: Props) {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }
    return (
        <input onChange={onChangeHandler} defaultValue={text} type="text" className="my-2 trans-400 w-full font-inter text-sm leading-[18px] px-3 py-[9px] rounded-lg ring-4 min-h-[36px] border box-border border-design-gray-500 focus:border-primary hover:border-primary hover:border-opacity-40 hover:ring-opacity-[0.068] focus:ring-opacity-[0.15] hover:ring-primary focus:ring-primary ring-white focus-within:outline-none outline-none"></input>
    )
}