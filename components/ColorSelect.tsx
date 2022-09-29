import React from 'react'
import { useAppDispatch } from 'redux/hooks'
import { updateLayout } from 'redux/slices/modal'



type Props = {
    colorPaletteSize: number
}
export default function ColorSelect({ colorPaletteSize }: Props) {

    return (
        <div className="flex gap-[10px] items-center hover-grow-all">
            {Array.from({ length: colorPaletteSize }).map((_, index) => <Color key={`color-${index}`} colorID={index+1} />)}
        </div>
    )
}


const Color = ({ colorID }: { colorID: number }) => {
    const dispatch = useAppDispatch()
    const selectColorHandler = () => {
        dispatch(updateLayout(
            {
                name: 'colors',
                value:
                {
                    bg: `modal-bg-color-${colorID}`,
                    text: `modal-text-color-${colorID}`
                }
            }))
    }

    return <div onClick={selectColorHandler} className={`modal-bg-color-${colorID} w-[42px] h-[42px] rounded-[10px] !outline-none border border-black border-opacity-30 cursor-pointer box-border`} />
}