import React, { useRef, useState } from 'react'
import { ModalType } from 'redux/slices/modal'
import cn from 'classnames'

type Props = {
    items?: ModalType['contents']['radios']
    radioColorTheme?: string
    returnedValue: (data: number) => {}
}

export default function ModalRadios({ items,radioColorTheme, returnedValue }: Props) {

    const selectHandler = (value: number) => {
        returnedValue(value)

    }

    return (
        <div className="flex gap-8 flex-col justify-center items-start modal-radio-container">
            {
                items && items.map(({ title, description, selected }, index) =>
                    <div key={`radio-${index}`} onClick={() => selectHandler(index)} className={cn({ 'opacity-[.63]': !selected }, 'trans-300 radio-item cursor-pointer hover:opacity-100 group  flex gap-[10.5px] justify-center items-center')}>
                        <div className="relative overflow-hidden trans-300 self-start rounded-full w-[23px] h-[23px] bg-white border border-[#717791] ring-white ring-[4.5px] group-hover:ring-primary group-hover:ring-opacity-[0.18] hover:border-primary ">
                            <div className="inset-0 bg-primary w-full h-full">
                                <div className={cn({ 'scale-[.4]': selected }, ' w-full h-full trans-400 inset-0 m-auto absolute bg-white rounded-full')}></div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-[10px] -translate-y-1">
                            <label className="!text-lg leading-[21.78px] font-medium m-none h-[22px] cursor-pointer ">{title}</label>
                            <p className="text-sm text-[#717791] leading-[16.94px]">{description}</p>
                        </div>
                    </div>
                )
            }

        </div>
    )
}