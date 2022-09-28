import React from 'react'
import { useAppDispatch } from 'redux/hooks'
import { updateLayout } from 'redux/slices/modal'



type Props = {
    colors: string[]
}
type ColorProps = {
    color: string
}

export default function ColorSelect({ colors }: Props) {

    const dispatch = useAppDispatch()

    const Color = ({ color }: ColorProps) => {
        const selectColorHandler = () => {
            dispatch(updateLayout({ name: 'colors', value: color }))
        }
        return <div onClick={selectColorHandler} className={`${color} w-[42px] h-[42px] rounded-[10px] !outline-none border border-black border-opacity-30 cursor-pointer box-border`} />
    }


    return (
        <div className="flex gap-[10px] items-center hover-grow-all">
            {colors.map((color, index) => <Color key={color} color={color} />)}
        </div>
    )
}